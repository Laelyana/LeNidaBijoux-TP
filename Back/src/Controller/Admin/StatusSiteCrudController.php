<?php

namespace App\Controller\Admin;

use App\Entity\StatusSite;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class StatusSiteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return StatusSite::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            'active',
            'startDate',
            'endDate'
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Statut du site')
        ->setEntityLabelInPlural('Statut du site');
    }
    
    public function configureActions(Actions $actions): Actions
{
    return $actions
        ->remove(Crud::PAGE_INDEX, Action::DELETE)
        ->remove(Crud::PAGE_INDEX, Action::NEW);
        
}
}
