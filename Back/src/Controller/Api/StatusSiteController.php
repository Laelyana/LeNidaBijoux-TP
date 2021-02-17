<?php

namespace App\Controller\Api;

use App\Repository\StatusSiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class StatusSiteController extends AbstractController
{
    /**
     * @Route("/api/status-site/active", name="api_status_site_read", methods={"GET"})
     */
    public function readSiteStatus(StatusSiteRepository $statusRepo)
    {
        $status = $statusRepo->findAll();
        
        return $this->json($status[0]->getActive());
    }
}
