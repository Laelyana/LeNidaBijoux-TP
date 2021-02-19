<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Colection;
use App\Entity\Product;
use App\Entity\Slider;
use App\Entity\Style;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        // redirect to some CRUD controller
        $routeBuilder = $this->get(AdminUrlGenerator::class);

        return $this->redirect($routeBuilder->setController(ProductCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Nid à bijoux - Admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::section('Sections');
        yield MenuItem::linkToCrud('Catégories', 'fas fa-edit', Category::class);
        yield MenuItem::linkToCrud('Collections', 'fas fa-list', Colection::class);
        yield MenuItem::linkToCrud('Styles', 'fas fa-list', Style::class);
        yield MenuItem::linkToCrud('Produits', 'fas fa-cut', Product::class);
        yield MenuItem::linkToCrud('Slider', 'fas fa-tools', Slider::class);
        
    }
}
