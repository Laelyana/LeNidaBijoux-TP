import React from 'react';

import goldengate from './img/goldengate.jpg';

import './slider.scss';


const Slider = () => (

  <div className="slider">
  <div className="slider__btn--bas"></div>
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


