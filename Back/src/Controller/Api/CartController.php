<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Entity\OrderLine;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class CartController extends AbstractController
{
    /**
     * @Route("/api/carts/user/{id}", name="api_carts", methods={"POST"})
     */
    public function add(int $id, OrderRepository $orderRepo, ProductRepository $productRepo, UserRepository $userRepo, Request $request, EntityManagerInterface $em): Response
    {
        if($user = $userRepo->find($id)){

            $order = new Order();
            $order->setUser($user);
            $em->persist($order);
            $em->flush();
            //dd($order);

            $infoFromClientAsArray = json_decode($request->getContent(), false);
            //dump($infoFromClientAsArray);

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