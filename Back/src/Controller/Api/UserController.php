<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/api/users", name="api_users_read", methods={"GET"})
     */
    public function read(): Response
    {
        $user = $this->getUser();
        return $this->json($user);
    }

    /**
     * @Route("/api/users", name="api_users_add", methods={"POST"})
     */
    public function add(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {    
        // we retrieve the json data and we convert in a php array
        $infoFromClientAsArray = json_decode($request->getContent(), true);

        // we create a form with User type
        $user = new User();
        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]); // we stop the csrf token verification because the data is sent by a react form

        // we simulate the submission of the form to active the constraints validation
        $form->submit($infoFromClientAsArray);


        if ($form->isValid())
        {   
            // we retrieve the password in visible
            $rawPassword = $infoFromClientAsArray['password'];

            $encodedPassword = $passwordEncoder->encodePassword($user, $rawPassword);

            $user->setPassword($encodedPassword);

            $em->persist($user);
            $em->flush();

            // after add the data in database we return what we have added
            return $this->json($user);
        }
        else 
        {
            return $this->json([(string) $form->getErrors(true, false)], Response::HTTP_BAD_REQUEST); // sent the errors of the constraints validation
        }

    }

    /**
     * @Route("/api/users", name="api_users_edit", methods={"PATCH"})
     */
    public function edit(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $infoFromClientAsArray = json_decode($request->getContent(), true);

        $user = $this->getUser();

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);

        $form->submit($infoFromClientAsArray, false);

        if ($form->isValid())
        {   
            if(isset($infoFromClientAsArray['password']))
            {
                    $rawPassword = $infoFromClientAsArray['password'];

                    $encodedPassword = $passwordEncoder->encodePassword($user, $rawPassword);
                    
                    $user->setPassword($encodedPassword);
            }

            $user->setUpdatedAt(new DateTime());

            $em->flush();

            return $this->json($user);
        }
        else 
        {
            return $this->json([(string) $form->getErrors(true, false)], Response::HTTP_BAD_REQUEST);
        }

    }

    /**
     * @Route("/api/users", name="api_users_delete", methods={"DELETE"})
     */
    public function delete(EntityManagerInterface $em): Response
    {
        $user = $this->getUser();
       
        if ($user) {
            $em->remove($user);
            $em->flush();
        }

        return $this->json(null,204);
        
    }

}
