<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserCrudController extends AbstractCrudController
{
    private $userPasswordEncoderInterface;

    public function __construct(UserPasswordEncoderInterface $userPasswordEncoderInterface)
    {
        $this->userPasswordEncoderInterface = $userPasswordEncoderInterface;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $encodedPassword = $this->userPasswordEncoderInterface->encodePassword($entityInstance, $entityInstance->getRawPassword());
        $entityInstance->setPassWord($encodedPassword);
        $entityInstance->setRawPassword(null);
        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance->getRawPassword()) {
            $encodedPassword = $this->userPasswordEncoderInterface->encodePassword($entityInstance, $entityInstance->getRawPassword());
            $entityInstance->setPassWord($encodedPassword);
        }
        parent::updateEntity($entityManager, $entityInstance);
        $entityInstance->setRawPassword(null);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            EmailField::new('email', "Email"),
            TextField::new('lastname','Nom'),
            TextField::new('firstname','Prénom'),
            TextField::new('rawPassword', 'Mot de passe')->onlyOnForms()->setHelp('Tapez un nouveau mot de passe pour le modifier'),
            TextField::new('phoneNumber','Numéro de téléphone')->hideOnIndex(),
            ArrayField::new('roles', 'Rôle')
        ];
    }
    
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInSingular('Utilisateur')
        ->setEntityLabelInPlural('Utilisateurs');
    }
}
