<?php

namespace App\DataFixtures;

use Faker;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use App\Entity\Style;
use App\Entity\Category;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

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
            $category->setName($faker->name());
            $category->setPicture('image.jpg');
        $manager->persist($category);
        }
        

        for ($i=0; $i < 5; $i++) {
            $style = new Style();
            $style->setName('Style n° '.$i);
            $style->setCategory($category);
        
        $manager->persist($style);
        }

        $manager->flush();
    }
}
