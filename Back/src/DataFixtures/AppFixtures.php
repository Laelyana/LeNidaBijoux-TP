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


        for ($i=0; $i < 4; $i++) { 
            $category = New Category();
            $category->setName($faker->word());
            $category->setPicture($faker->word().'.jpg');

        $manager->persist($category);
        }
        

        for ($i=0; $i < 2; $i++) {
            $style = new Style();
            $style->setName('Style n° '.$i);
            $style->setCategory($category);
        
        $manager->persist($style);
        }

        for ($i=0; $i < 4; $i++) { 
            $user = new User;
            $firstnameAndPassword = $faker->firstName();
            $user->setFirstname($firstnameAndPassword);
            $user->setLastname($faker->lastName());
            $user->setEmail($faker->email());
            $user->setRole('user');
            $user->setPassword($this->encoder->encodePassword($user,$firstnameAndPassword));
            $user->setPhoneNumber($faker->phoneNumber());
        }

        $manager->flush();
    }
}
