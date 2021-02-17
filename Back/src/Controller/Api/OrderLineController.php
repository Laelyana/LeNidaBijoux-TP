<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\OrderLineRepository;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class OrderLineController extends AbstractController
{
    /**
     * @Route("/api/order-lines/orders/{id}", name="api_order_lines_browse_by_order", methods={"GET"})
     */
    public function browseByOrder(OrderLineRepository $orderLineRepo, int $id): Response
    {
        return $this->json($orderLineRepo->findBy(['orderEntity' => $id]), 200);
    }
}