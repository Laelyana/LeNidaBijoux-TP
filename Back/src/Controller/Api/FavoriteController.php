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
     * @Route("/api/favorites/users/{id}", name="api_favorites_add_by_user", methods={"PATCH"})
     */
    public function addProductToUser(int $id, Request $request, EntityManagerInterface $em, UserRepository $userRepo, ProductRepository $productRepo): Response
    {
        if($user = $userRepo->find($id)){

            $infoRequest = json_decode($request->getContent(), false);

            if($infoRequest != null && property_exists ($infoRequest , "productId")){

                if($product = $productRepo->find($infoRequest->productId)){
        
                    $user->addProduct($product);
                    $em->persist($user);
                    $em->flush();
                    return $this->json($user->getProduct(), 200);
        
                }else{
        
                    return $this->json("this product doesn't exist", 404);
                }

            }else{

                return $this->json("bad request", 400);
            }

        }else{

            return $this->json("this user doesn't exist", 404);
        }
    }

    /**
     * @Route("/api/favorites/{product_id}/users/{user_id}", name="api_favorites_delete_by_user", methods={"DELETE"})
     */
    public function deleteProductFromUser(int $product_id, int $user_id, ProductRepository $productRepo, UserRepository $userRepo, EntityManagerInterface $em): Response
    {
        if($user = $userRepo->find($user_id)){

            if($product = $productRepo->find($product_id)){
    
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
