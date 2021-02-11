<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use App\Entity\Style;
use App\Entity\Category;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $category = New Category();

        $category->setName('plouf');
        $category->setPicture('image.jpg');

        $manager->persist($category);

        for ($i=0; $i < 5; $i++) {
            
        $style = new Style();
        $style->setName('Style n° '.$i);
        $style->setCategory($category);
        
        $manager->persist($style);
        }

        $manager->flush();
    }
}
