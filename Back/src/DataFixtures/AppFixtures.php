<?php

namespace App\DataFixtures;

use Faker;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use App\Entity\Style;
use App\Entity\Category;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        // On crée une instance de Faker en français
        $faker = Faker\Factory::create('fr_FR');

        // Création des fausses catégories
            $category1 = New Category();
            $category1->setName('Bracelets');
            $category1->setPicture($faker->word().'.jpg');
                $manager->persist($category1);
            $category2 = New Category();
            $category2->setName('Colliers');
            $category2->setPicture($faker->word().'.jpg');
                $manager->persist($category2);
            $category3 = New Category();
            $category3->setName('Bagues');
            $category3->setPicture($faker->word().'.jpg');
                $manager->persist($category3);
            $category4 = New Category();
            $category4->setName('Boucles d\'oreilles');
            $category4->setPicture($faker->word().'.jpg');
                $manager->persist($category4);
        
        
            $style1 = new Style();
            $style1->setName('Colliers longs');
            $style1->setCategory($category2);
                $manager->persist($style1);
            $style2 = new Style();
            $style2->setName('Colliers courts');
            $style2->setCategory($category2);
                $manager->persist($style2);
            $style3 = new Style();
            $style3->setName('Puces');
            $style3->setCategory($category4);
                $manager->persist($style3);
            $style4 = new Style();
            $style4->setName('Crochets');
            $style4->setCategory($category4);
                $manager->persist($style4);
            $style5 = new Style();
            $style5->setName('Créoles');
            $style5->setCategory($category4);
                $manager->persist($style5);
        
            $product1 = new Product();
            $product1->setName('Collier fleur');
            $product1->setPrice(60);
            $product1->setDescription($faker->text(100));
            $product1->setPicture1('test.jpg');
            $product1->setStock(3);
                $manager->persist($product1);

            $product2 = new Product();
            $product2->setName('Bague pokémon');
            $product2->setPrice(8);
            $product2->setDescription($faker->text(100));
            $product2->setPicture1('test2.jpg');
            $product2->setStock(1);
                $manager->persist($product2);
                

        for ($i=0; $i < 4; $i++) { 
            $user = new User();
            $firstnameAndPassword = $faker->firstName();
            $user->setFirstname($firstnameAndPassword);
            $user->setLastname($faker->lastName());
            $user->setEmail($faker->email());
            $user->setRoles(['user']);
            $user->setPassword($this->encoder->encodePassword($user,$firstnameAndPassword));
            $user->setPhoneNumber($faker->numberBetween(0000000000,9999999999));

        $manager->persist($user);
        }

        $manager->flush();
    }
}
