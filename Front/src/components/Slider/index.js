import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

//code vanilla slider

//let SliderGenerale = addEventListener('click', onClickSlider, true);




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
