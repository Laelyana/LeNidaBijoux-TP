<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name','Nom du produit'),
            IntegerField::new('price','Prix'),
            TextEditorField::new('description','Description'),
            ImageField::new('picture1','Photo n°1'),
            ImageField::new('picture2','Photo n°2'),
            ImageField::new('picture3','Photo n°3'),
            NumberField::new('stock', 'Stock'),
            AssociationField::new('category', 'Catégorie'),
            AssociationField::new('colection', 'Collection'),
            AssociationField::new('style', 'Style'),

        ];
    }
    
}
