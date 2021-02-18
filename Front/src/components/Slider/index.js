import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );

//code vanilla slider
// let slides = document.querySelector("slider__list");
let slideItems  = document.querySelectorAll("slider__item");
// let left = document.getElementsByClassName("slider__gauche");
// let right = document.getElementsByClassName("slider__droite");
// let state = true;
// let currentSlide = 0;




function Direction(sens) {
  let slideGeneral = document.getElementById("slider__list");
  let slides = document.querySelectorAll(".slide__item");
  var children = slideGeneral.childNodes;
  


  console.log(children);
  let slideNumber = 0;
  slideNumber = slideNumber + sens;
    if (slideNumber < 0){
      slideNumber = slides.length - 1;
    slides.index = +1;
      console.log("clic -1");
     
    }
    if (slideNumber> slides.length - 1)
    {slideNumber = 0; console.log("clic +1"); }
    
    //setInterval("ChangeSlide(1)", 4000);
}


  return (

    <div className="slider">
    <div className="slider__btn--haut"></div>
    <div id="slider__list">
    
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
    
    </div>
    <div className="slider__gauche" onClick={() => Direction(-1)}>
    <div className="slider__btn"></div>
    </div>
    <div className="slider__droite" onClick={() => Direction(1)}>
    <div className="slider__btn"></div>
    </div>
    
  </div>


  );
};

export default Slider;
