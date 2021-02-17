import React from 'react';

import un from './img/1.jpg';
import goldengate from './img/goldengate.jpg';


import './slider.scss';

//variable avec class du bouton gauche
let btnLeft = document.querySelector(".slider__gauche");
//variable avec class du bouton droit
let btnRight = document.querySelector(".slider__droite");
//variable du slider general
let slider = document.querySelector(".slider");
//variable item__slider qui contient chaque image
let sliderItem = document.querySelectorAll(".slider__item");
//variable de rond pour les btn
let sliderBtn = document.querySelector(".slider__btn");
//varable slider list ou sont les slider__item afin de les rassembler, compter et boucler
let sliderList = document.querySelector("#slider__list");
//on compte le nombre de class slider__item dans le bloc slider__list
let nombre = document.querySelectorAll('#slider__list > .slider__item').length;

//console.log(nombre);

function gauche(){
alert("clic btn gauche CURIEUX !")
};

function droit(){
  alert("clic btn droit CURIEUX !")
  };

const Slider = () => (

  <div className="slider">
  <div className="slider__btn--haut" ></div>
  <div id="slider__list">
  <div className="slider__item"><img className="slider__img" src={un} alt="" /></div>
  <div className="slider__item"><img className="slider__img" src={goldengate} alt="" /></div>
  </div>
  <div className="slider__gauche" onClick={gauche}>
  <div className="slider__btn" ></div>
  </div>
  <div className="slider__droite" onClick={droit}>
  <div className="slider__btn"></div>
  </div>
</div>
);


export default Slider;


