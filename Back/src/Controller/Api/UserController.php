<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class UserController extends AbstractController
{
    /**
     * @Route("/api/users", name="api_users_browse", methods="GET")
     */
    public function browse(UserRepository $userRepo): Response
    {

        return $this->json($userRepo->findAll(),200, [], [
            AbstractNormalizer::IGNORED_ATTRIBUTES => [
                'product',
                'orders'
            ]]);
    }
}
