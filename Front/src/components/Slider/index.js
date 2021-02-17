import React from 'react';

import un from './img/1.jpg';
import goldengate from './img/goldengate.jpg';


import './slider.scss';

let btnLeft = document.querySelector(".slider__gauche");
let btnRight = document.querySelector(".slider__droite");
let slider = document.querySelector(".slider");
let sliderItem = document.querySelector(".slider__item");
let sliderBtn = document.querySelector(".slider__btn");



const Slider = () => (

  <div className="slider">
  <div className="slider__btn--haut" ></div>
  <div className="slider__item"><img className="slider__img" src={un} alt="" /></div>
  <div className="slider__item"><img className="slider__img" src={goldengate} alt="" /></div>
  <div className="slider__gauche">
  <div className="slider__btn"></div>
  </div>
  <div className="slider__droite">
  <div className="slider__btn"></div>
  </div>
</div>
);


export default Slider;


