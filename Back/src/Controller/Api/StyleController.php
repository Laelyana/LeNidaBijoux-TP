<?php

namespace App\Controller\Api;

use App\Repository\CategoryRepository;
use App\Repository\StyleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class StyleController extends AbstractController
{
    /**
     * @Route("/api/style/categories/{id}", name="api_styles_browse_by_category", methods={"GET"})
     */
    public function browseByCategory(StyleRepository $styleRepo, CategoryRepository $categoryRepo, $id): Response
    {
        return $this->json($styleRepo->findBy(['category' => $id]));
    }
}
