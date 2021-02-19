import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  console.log(slider);

//code vanilla slider
var slideIndex = "1";
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slider = document.getElementsByClassName("slider__list");
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__btn--haut");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 3; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("none");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      console.log("active");
  }
 
}


function gauche() {
console.log("clic gauche");

};

function droite() {
  console.log("clic droite");
  };

  return (

    <div className="slider">
    <div className="slider__btn--haut"></div>
    <div id="slider__list">
    <div>
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
    </div>
    </div>
    <div className="slider__gauche" onClick={plusSlides(-1)}>
    <div className="slider__btn"></div>
    </div>
    <div className="slider__droite" onClick={plusSlides(1)}>
    <div className="slider__btn"></div>
    </div>
    
  </div>

 
  );
};

export default Slider;
