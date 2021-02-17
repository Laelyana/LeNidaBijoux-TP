<?php

namespace App\Controller\Api;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ProductController extends AbstractController
{
    /**
     * @Route("/api/products/{id}", name="api_products_read", methods={"GET"})
     */
    public function read(Product $product): Response
    {
        return $this->json($product);
    }

    /**
     * @Route("/api/products/colections/{id}", name="api_products_browse_by_colection", methods={"GET"})
     */
    public function browseByColection(ProductRepository $productRepo, $id): Response
    {
        return $this->json($productRepo->findBy(['colection' => $id]));
    }

    /**
     * @Route("/api/products/categories/{id}", name="api_products_browse_by_category", methods={"GET"})
     */
    public function browseByCategory(ProductRepository $productRepo, $id): Response
    {
        return $this->json($productRepo->findBy(['category' => $id]));
    }

    /**
     * @Route("/api/products/styles/{id}", name="api_products_browse_by_style", methods={"GET"})
     */
    public function browseByStyle(ProductRepository $productRepo, $id): Response
    {
        return $this->json($productRepo->findBy(['style' => $id]));
    }

    /**
     * @Route("/api/products/{id}/likes-up", name="api_products_likes_update_up", methods={"PATCH"})
     */
    public function increment(Product $product, EntityManagerInterface $em)
    {
        $product->setLiked($product->getLiked() + 1);
        $em->flush();
        return $this->json($product,200);
    }

    /**
     * @Route("/api/products/{id}/likes-down", name="api_products_likes_update_down", methods={"PATCH"})
     */
    public function decrement(Product $product, EntityManagerInterface $em)
    {
        $product->setLiked($product->getLiked() - 1);
        $em->flush();
        return $this->json($product,200);
    }
}
