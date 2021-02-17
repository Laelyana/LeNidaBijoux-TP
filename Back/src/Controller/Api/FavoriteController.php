<?php

namespace App\Controller\Api;

use App\Entity\User;
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
    public function browseByUser(User $user): Response
    {
        return $this->json($user->getProduct());
    }

    /**
     * @Route("/api/favorites/users/{id}", name="api_favorites_update_by_user", methods={"POST"})
     */
    public function addProductToUser(Request $request, EntityManagerInterface $em, User $user): Response
    {
        $infoRequestAsArray = json_decode($request->getContent(), true);
        $user->addProduct($infoRequestAsArray);
        $em->persist($user);
        $em->flush();

        return $this->json($user, 201);
    }
}
