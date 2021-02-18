import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );

//code vanilla slider
let timerSlide = '2500'; //timer
let slider__list = document.querySelector('#slider'); //la div parent qui contient les div photos
let slider__items = document.querySelectorAll('.slider__item'); //la div enfant, la variables sélectionne toutes les class du même nom
let sliderItemNumber = slider__items.length; //nombre de divs slider__item
let btnGauche = document.querySelector('.slider__gauche'); //btn gauche
let btnDroit = document.querySelector('.slider__droite'); //btn droit

function gauche() {
console.log("clic gauche");
};

function droite() {
  console.log("clic droite");
  };

  return (

    <div className="slider">
    <div className="slider__btn--haut" ></div>
    <div id="slider__list">
    <div>
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
    </div>
    </div>
    <div className="slider__gauche" onClick={gauche}>
    <div className="slider__btn"></div>
    </div>
    <div className="slider__droite" onClick={droite}>
    <div className="slider__btn"></div>
    </div>
    
  </div>

 
  );
};

export default Slider;
