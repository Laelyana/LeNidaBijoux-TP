<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserPatchType;
use App\Form\UserType;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
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
     * @Route("/api/users/sign_in", name="api_users_add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepo, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder, MailerInterface $mailer): Response
    {    
        // we retrieve the json data and we convert in a php array
        $infoFromClientAsArray = json_decode($request->getContent(), true);

        if(empty($infoFromClientAsArray)){
            return $this->json("request is not valid",400);
        }

        if($userRepo->findOneby(['email'=>$infoFromClientAsArray['email']])){
            return $this->json("This user already exist",403);
        }
        
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

            $emailBuyer = (new Email())
            ->from('nicoOclock@gmail.com')
            ->to($user->getEmail())
            ->subject('Bienvenue au Nid à Bijoux !')
            ->text(
            'Bonjour '.$user->getFirstname().' '.$user->getLastname().' !'."\n"."\n".
            'Votre inscription à bien été pris en compte.'."\n".
            'Vous pouvez vous connecter quand vous voulez en saisissant votre mot de passe et votre email: '.$user->getEmail()       
            );

            $mailer->send($emailBuyer); // send the confirmation email to the buyer

            // after add the data in database we return what we have added
            return $this->json($user,201);
        }
        else 
        {
            return $this->json((string) $form->getErrors(true, false), 400); // sent the errors of the constraints validation
        }

    }

    /**
     * @Route("/api/users", name="api_users_edit", methods={"PATCH"})
     */
    public function edit(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $infoFromClientAsArray = json_decode($request->getContent(), true);

        if(empty($infoFromClientAsArray)){
            return $this->json("request is not valid",400);
        }

        $user = $this->getUser();

        $form = $this->createForm(UserPatchType::class, $user, ['csrf_protection' => false]);

        $form->submit($infoFromClientAsArray, false);

        if ($form->isValid())
        {   
            if(isset($infoFromClientAsArray['password']))
            {
                    $rawPassword = $infoFromClientAsArray['password'];

                    $encodedPassword = $passwordEncoder->encodePassword($user, $rawPassword);
                    
                    $user->setPassword($encodedPassword);
            }

            if(isset($infoFromClientAsArray['email'])){
                $user->setEmail($infoFromClientAsArray['email']);
            }

            if(isset($infoFromClientAsArray['firstname'])){
                $user->setFirstname($infoFromClientAsArray['firstname']);
            }

            if(isset($infoFromClientAsArray['lastname'])){
                $user->setLastname($infoFromClientAsArray['lastname']);
            }

            if(isset($infoFromClientAsArray['phoneNumber'])){
                $user->setPhoneNumber($infoFromClientAsArray['phoneNumber']);
            }


            $user->setUpdatedAt(new DateTime());

            $em->flush();

            return $this->json($user);
        }
        else 
        {
            return $this->json((string) $form->getErrors(true, false), 400);
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
