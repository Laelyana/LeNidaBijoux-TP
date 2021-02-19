import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

//code vanilla slider

function onClickSlider(e) {
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
   //console.log("clic ++");

 }

 else {
   currImage--;
   //console.log("clic --");
   currImage = currImage.length-1
   section.className = "slider__img slider__img";
 }

}


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  console.log(slider);

  // code vanilla slider
  // let children  = document.querySelectorAll("slider__img");
  // console.log(children);
  let carousel = document.querySelector("slider__list");

  //let children = figure.childElementCount;
  let nav = document.querySelector('nav');
  //let numImages = figure.childElementCount;

  let currImage = 0;

  window.addEventListener('click', onClick, true);

  function onClick(e) {
    e.stopPropagation();
    //let numImages = figure.childElementCount;
    let amount = document.querySelectorAll(".slide__img").length;
    console.log(amount);
    let figure = document.querySelectorAll(".slide__item");
    let children = document.querySelectorAll("slide__img");
    let numImages = figure.childElementCount;
    let t = e.target;
    let currImage = 0;

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
