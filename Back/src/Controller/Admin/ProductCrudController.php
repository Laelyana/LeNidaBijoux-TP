<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
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
        if($pageName === Crud::PAGE_EDIT){
            $required = false;
        }else{
            $required = true;
        }
        return [

            TextField::new('name', 'Nom du produit'),
            NumberField::new('price', 'Prix'),
            TextEditorField::new('description', 'Description'),
            IntegerField::new('liked','Nb de likes'),
            ImageField::new('picture1', 'Photo n°1')->setUploadDir('public/pictures')
                                                    ->setBasePath('/pictures')
                                                    ->setRequired($required),
            ImageField::new('picture2', 'Photo n°2')->setUploadDir('public/pictures')
                                                    ->setBasePath('/pictures'),
            ImageField::new('picture3', 'Photo n°3')->setUploadDir('public/pictures')
                                                    ->setBasePath('/pictures'),
            IntegerField::new('stock', 'Stock'),
            AssociationField::new('category', 'Catégorie'),
            AssociationField::new('colection', 'Collection'),
            AssociationField::new('style', 'Style'),

        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Produit')
            ->setEntityLabelInPlural('Produits')
            ->setDefaultSort(['id' => 'DESC']);
    }
}
