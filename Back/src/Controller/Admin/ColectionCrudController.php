<?php

namespace App\Controller\Admin;

use App\Entity\Colection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ColectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Colection::class;
    }

    public function configureFields(string $pageName): iterable
    {
        if($pageName === Crud::PAGE_EDIT){
            $required = false;
        }else{
            $required = true;
        }
        
        return [
            TextField::new('name','Nom de la collection'),
            ImageField::new('picture','Image')->setUploadDir('public/pictures')
                                              ->setBasePath('/pictures')
                                              ->setRequired($required)
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Collection')
        ->setEntityLabelInPlural('Collections');
    }
}
