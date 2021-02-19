import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

//code vanilla slider
let children  = document.querySelectorAll("slider__img");
console.log(children);
let carousel = document.querySelector("slider__list");
 let figure = document.querySelector("slide__item");
 //let children = figure.childElementCount;
 let nav = document.querySelector('nav');
 //let numImages = figure.childElementCount;
 //let theta =  2 * Math.PI / numImages;
 let currImage = 0;

window.addEventListener('click', onClick, true);

function onClick(e) {
 
 var t = e.target;
 if (t.tagName.toUpperCase() != 'BUTTON')
   return;
 
 if (t.classList.contains('slider__next')) {
   currImage++;
   console.log("clic ++");
 }
 else {
   currImage--;
   console.log("clic --");
 }
 
}


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );

  

  return (

    <div className="slider">
    <div className="slider__btn--haut"></div>
    <div id="slider__list">
    <div className="slider__item">
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
      </div>
    </div>
    <nav>
    <button className="slider__prev">prev</button>
    <button className="slider__next">next</button>
    </nav>
  </div>


  );
};

export default Slider;
