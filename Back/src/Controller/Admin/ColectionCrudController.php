<?php

namespace App\Controller\Admin;

use App\Entity\Colection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ColectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Colection::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name','Nom de la collection'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Collection')
        ->setEntityLabelInPlural('Collections');
    }
}
