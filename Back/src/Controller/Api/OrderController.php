<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class OrderController extends AbstractController
{
    /**
     * @Route("/api/orders/user/{id}", name="api_orders_browse_by_user", methods={"GET"})
     */
    public function browseByUser(OrderRepository $orderRepo, int $id): Response
    {
        return $this->json($orderRepo->findBy(['user' => $id]), 200);
    }
}