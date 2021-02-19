<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Entity\OrderLine;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class CartController extends AbstractController
{
    /**
     * @Route("/api/carts/users", name="api_carts", methods={"POST"})
     */
    public function add(OrderRepository $orderRepo, ProductRepository $productRepo, Request $request, EntityManagerInterface $em): Response
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
            
            return $this->json($order, 200);

        }else{

            return $this->json("this user doesn't exit", 404);

        }  
    }
}