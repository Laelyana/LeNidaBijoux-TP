<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class testController extends AbstractController
{
    /**
     * @Route("/api/test", name="api_test")
     */
    public function read(): Response
    {
        $testVariable = ['membre 1' => 'Lauriane',
                         'membre 2' => 'Nicolas',
                         'membre 3' => 'Benoit',
                         'membre 4' => 'Pierre' ];
       

        return $this->json($testVariable);
    }
}
