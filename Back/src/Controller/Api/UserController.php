<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/api/users", name="api_users_browse", methods={"GET"})
     */
    public function browse(UserRepository $userRepo): Response
    {
        return $this->json($userRepo->findAll());

    }

    /**
     * @Route("/api/users/{id}", name="api_users_read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read(User $user): Response
    {
        return $this->json($user);
    }

    /**
     * @Route("/api/users", name="add", methods={"POST"})
     */
    public function add(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // on récupère les infos fournies en json et on les convertis en tableau php
        $infoFromClientAsArray = json_decode($request->getContent(), true);
    dump($infoFromClientAsArray);

        $user = new User();
        // on créé un formulaire de type User
        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        // on block la verification csrf car les infos sont envoyé à partir du formulaire react et non d'un formulaire symfo
        
        // on simule la soumission du formulaire 
        // pour activer le système de validations des contraintes
    dump($form);
        $form->submit($infoFromClientAsArray);
    dd($form);

        if ($form->isValid())
        {   
            // récupérer le mot de passe en clair
            $rawPassword = $infoFromClientAsArray['password'];

            $encodedPassword = $passwordEncoder->encodePassword($user, $rawPassword);
            
            $user->setPassword($encodedPassword);

            $em->persist($user);
            $em->flush();

            // après ajout on renvoit les données modifiées
            return $this->json($user);
        }
        else 
        {
            return $this->json((string) $form->getErrors(true, false), Response::HTTP_BAD_REQUEST); // renvoie les erreurs de validations de formulaire
        }

    }

    /**
     * @Route("/api/users/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     */
    public function edit(User $user, Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $infoFromClientAsArray = json_decode($request->getContent(), true);

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        
        $form->submit($infoFromClientAsArray, false);

        if ($form->isValid())
        {   
            if(isset($infoFromClientAsArray['password'])){

                    $rawPassword = $infoFromClientAsArray['password'];

                    $encodedPassword = $passwordEncoder->encodePassword($user, $rawPassword);
                    
                    $user->setPassword($encodedPassword);
                }

            $em->flush();

            return $this->json($user);
        }
        else 
        {
            return $this->json((string) $form->getErrors(true, false), Response::HTTP_BAD_REQUEST);
        }

    }


}
