import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div>
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
    </div>
  );
};

export default Slider;
