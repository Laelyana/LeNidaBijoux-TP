<?php

namespace App\Controller\Admin;

use App\Entity\OrderLine;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;

class OrderLineCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return OrderLine::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            Field::new('quantity', "Quantité"),
            Field::new('labelProduct', "Produit"),
            Field::new('priceProduct', "Prix du produit"),
            AssociationField::new('orderEntity', 'Commande n°')
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Commande')
        ->setEntityLabelInPlural('Commandes')
        ->setDefaultSort(['orderEntity' => 'DESC']);
    }
    public function configureActions(Actions $actions): Actions
    {
    return $actions
        ->remove(Crud::PAGE_INDEX, Action::EDIT);
   
        
    }
}
