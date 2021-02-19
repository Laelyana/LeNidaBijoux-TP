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

                $orderLine = new OrderLine();
                $orderLine->setQuantity($quantity);
                $orderLine->setLabelProduct($product->getName());
                $orderLine->setPriceProduct($product->getPrice());
                $orderLine->setOrderEntity($order);
                
                $em->persist($orderLine);
            }

            $em->flush();

            $orderlines = $orderLineRepo->findBy(['orderEntity' => $order->getId()]); // récupération de la commande en BDD

            $message = '';
            $total = 0;

            foreach($orderlines as $orderline){

                $ligne = 'Article: " '.$orderline->getLabelProduct().' " / quantité: '.$orderline->getQuantity().' / prix unitaire: '.number_format($orderline->getPriceProduct(), 2, ",", " ").' euros TTC'."\n";

                $message .= $ligne;
                $total += $orderline->getPriceProduct()*$orderline->getQuantity();
            } // préparation d'un message récapitulatif de la commande

            $email = (new Email())
            ->from('nicoOclock@gmail.com')
            ->to('nicolaspairon@yahoo.fr')
            ->subject('Votre Commande du Nid à Bijoux !')
            ->text(
            'Votre commande n° '.$order->getId().' du '.$order->getDate()->format('d-m-Y \à H\hi').' est confirmé !'."\n"."\n".
            'Détails: '."\n".$message."\n".' Pour un Total de : '.number_format($total, 2, ",", " ").' euros TTC'       
            );

            $mailer->send($email); //envoie du mail de confirmation au client

            return $this->json($order, 200);
            

        }else{

            return $this->json("this user doesn't exit", 404);

        }  
    }
}