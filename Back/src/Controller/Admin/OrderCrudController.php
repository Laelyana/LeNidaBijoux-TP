<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;

class OrderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Order::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Commande')
        ->setEntityLabelInPlural('Commandes')
        ->setDateTimeFormat('dd/MM/y à HH:mm:ss');
    }

    
    public function configureFields(string $pageName): iterable
    {
        
        return [
            Field::new('id')->hideOnForm(),
            DateTimeField::new('date', 'Date'),
            AssociationField::new('user', 'Utilisateur')
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
    return $actions->remove(Crud::PAGE_INDEX, Action::EDIT);
    }
    
}
