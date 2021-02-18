<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class FavoriteController extends AbstractController
{
    /**
     * @Route("/api/favorites/users/{id}", name="api_favorites_browse_by_user", methods={"GET"})
     */
    public function browseByUser(UserRepository $userRepo, int $id): Response
    {
        if($user = $userRepo->find($id)){

            return $this->json($user->getProduct(), 200);

        }else{

            return $this->json("this user doesn't exist", 404);
        }
    }

    /**
     * @Route("/api/favorites/{productId}/users/{userId}", name="api_favorites_add_by_user", methods={"PATCH"})
     */
    public function addProductToUser(int $userId, int $productId, Request $request, EntityManagerInterface $em, UserRepository $userRepo, ProductRepository $productRepo): Response
    {
        if($user = $userRepo->find($userId)){

                if($product = $productRepo->find($productId)){
                    
                    $product->setLiked($product->getLiked() + 1);
                    $em->persist($product);
        
                    $user->addProduct($product);
                    $em->persist($user);

                    $em->flush();
                    return $this->json($user->getProduct(), 200);
        
                }else{
        
                    return $this->json("this product doesn't exist", 404);
                }

        }else{

            return $this->json("this user doesn't exist", 404);
        }
    }

    /**
     * @Route("/api/favorites/{productId}/users/{userId}", name="api_favorites_delete_by_user", methods={"DELETE"})
     */
    public function deleteProductFromUser(int $productId, int $userId, ProductRepository $productRepo, UserRepository $userRepo, EntityManagerInterface $em): Response
    {
        if($user = $userRepo->find($userId)){

            if($product = $productRepo->find($productId)){
    
                $product->setLiked($product->getLiked() - 1);
                $em->persist($product);

                $user->removeProduct($product);
                $em->persist($user);

                $em->flush();
            }

            return $this->json(null, 204);

        }else{

            return $this->json("this user doesn't exist", 404);
        }
    }
}
