import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

//code vanilla slider
window.addEventListener('click', onClick, true);
function onClick(e) {
  e.stopPropagation();
 let slides = document.querySelectorAll(".slider__img");
//console.log(slides);
 let section = document.querySelector("section");
 //console.log(section);
 let t = e.target;
 let currImage = 0;
 
 if (t.tagName.toUpperCase() != 'BUTTON')
		return;
 
 if (t.classList.contains('slider__next')) {
   currImage++;
   section.className = "slider__img slider__img--active";
   console.log("clic ++");

 }

 else {
   currImage--;
   console.log("clic --");
   currImage = currImage.length-1
   section.className = "slider__img slider__img";
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
