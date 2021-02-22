<?php

namespace App\Controller\Admin;

use App\Entity\StatusSite;
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
    
}
