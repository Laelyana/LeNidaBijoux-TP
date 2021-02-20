<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Entity\OrderLine;
use App\Repository\OrderLineRepository;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;


class CartController extends AbstractController
{
    /**
     * @Route("/api/carts/users", name="api_carts", methods={"POST"})
     */
    public function add(OrderRepository $orderRepo, ProductRepository $productRepo, OrderLineRepository $orderLineRepo, Request $request, EntityManagerInterface $em, MailerInterface $mailer): Response
    {
        $user = $this->getUser();

        if($user){

            $infoFromClientAsArray = json_decode($request->getContent(), false);

            $errors=[];

            foreach ($infoFromClientAsArray as $cart) {
                $productId = $cart->productId;
                $quantity = $cart->quantity;
                
                if (! $product = $productRepo->find($productId)) {
                    $errors[]="product doesn't exist";
                }

                if (! is_int($quantity) || $quantity<0) {
                    $errors[]="the quantity is not valid";
                }
            }

            if(count($errors) > 0){
                return $this->json($errors, 400);
                
            }

            $order = new Order();
            $order->setUser($user);
            $em->persist($order);
            $em->flush();
            
            foreach($infoFromClientAsArray as $cart){

                $productId = $cart->productId;
                $quantity = $cart->quantity;
                $product = $productRepo->find($productId);

                $product->setStock($product->getStock() - $quantity);
                $em->persist($product);

                $orderLine = new OrderLine();
                $orderLine->setQuantity($quantity);
                $orderLine->setLabelProduct($product->getName());
                $orderLine->setPriceProduct($product->getPrice());
                $orderLine->setOrderEntity($order);
                $em->persist($orderLine);
            }

            $em->flush();

            // -------------------return the validation by email to the seller and the buyer:---------------------

            $orderlines = $orderLineRepo->findBy(['orderEntity' => $order->getId()]); // retrieve the order from the database

            $messageDetails = '';
            $total = 0;

            foreach($orderlines as $orderline){ // making a text summary message of the passed order
                $ligne = 'Article: " '.$orderline->getLabelProduct().' " / quantité: '.$orderline->getQuantity().' / prix unitaire: '.number_format($orderline->getPriceProduct(), 2, ",", " ").' euros TTC'."\n";
                $messageDetails .= $ligne;
                $total += $orderline->getPriceProduct()*$orderline->getQuantity();
            } 
            $messageDetails .= "\n".' Pour un Total de : '.number_format($total, 2, ",", " ").' euros TTC';

            $emailBuyer = (new Email())
            ->from('nicoOclock@gmail.com')
            ->to($user->getEmail())
            ->subject('Votre Commande du Nid à Bijoux !')
            ->text(
            'Votre commande n° '.$order->getId().' du '.$order->getDate()->format('d-m-Y \à H\hi\m\i\ns\s').' est confirmé !'."\n"."\n".
            'Détails: '."\n".$messageDetails       
            );

            $mailer->send($emailBuyer); // send the confirmation email to the buyer

            $emailSeller = (new Email())
            ->from('nicoOclock@gmail.com')
            ->to('nicoOclock@gmail.com')
            ->subject('BON DE COMMANDE n° '.$order->getId().' du Nid à Bijoux !')
            ->text(
            'Commande n° '.$order->getId().' de '.$user->getFirstname().' '.$user->getLastname().' du '.$order->getDate()->format('d-m-Y \à H\hi\m\i\ns\s').' est confirmé !'."\n"."\n".
            'Email de l\'acheteur: '.$user->getEmail()."\n".
            'Téléphone de l\'acheteur: '.$user->getPhoneNumber()."\n"."\n".
            'Détails: '."\n".$messageDetails      
            );

            $mailer->send($emailSeller); // send the confirmation email to the seller

            return $this->json($order, 200);
            

        }else{

            return $this->json("this user doesn't exit", 404);

        }  
    }
}