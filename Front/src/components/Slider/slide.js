import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import un from './img/1.jpg';
import goldengate from './img/goldengate.jpg';

import './slider.scss';

//vanilla Slider

//on stock les class
let timerSlide = '2500'; //timer
let slider__list = document.querySelector('#slider'); //la div parent qui contient les div photos
let slider__items = document.querySelectorAll('.slider__item'); //la div enfant, la variables sélectionne toutes les class du même nom
let sliderItemNumber = slider__items.length; //nombre de divs slider__item
let btnGauche = document.querySelector('.slider__gauche'); //btn gauche
let btnDroit = document.querySelector('.slider__droite'); //btn droit

const Slide = () => (
   
  <div className="slider">
  <div className="slider__btn--haut" ></div>
  <div id="slider__list">
  <div className="slider__item active" id="1"><img className="slider__img" src={un} alt="" /></div>
  <div className="slider__item" id="2"><img className="slider__img" src={goldengate} alt="" /></div>
  </div>
  <div className="slider__gauche">
  <div className="slider__btn"></div>
  </div>
  <div className="slider__droite">
  <div className="slider__btn"></div>
  </div>
  
</div>
);

export default Slide;
