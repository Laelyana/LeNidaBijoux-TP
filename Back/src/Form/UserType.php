<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Positive;
use Symfony\Component\Validator\Constraints\Range;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'E-mail',
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                    new Length(['max'=>180])
                ]
            ])
            //->add('roles')
            ->add('password')
            ->add('firstname', TextType::class, [
                'label' => 'Prenom',
                'constraints' => [
                    new NotBlank(),
                    new Length(['max'=>60]),
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                'constraints' => [
                    new NotBlank(),
                    new Length(['max'=>60]),
                ]
            ])
            ->add('phoneNumber', null, [
                'label' => 'Numero de téléphone',
                'constraints' => [
                    new NotBlank(),
                    new Range(['max'=>9999999999999]),
                    new Positive()
                ]
            ])
            //->add('createdAt')
            //->add('updatedAt')
            //->add('product')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
