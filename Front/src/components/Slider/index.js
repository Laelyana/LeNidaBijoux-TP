import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Slid from './slid';

import './slide.scss';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  pauseOnHover: true,
  canSwipe: true,
};

const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  console.log(slider);
  const activeSlide = [];
  slider.forEach((slide) => {
    slide.active === true ? activeSlide.push(slide) : null;
  });
  console.log(activeSlide);

  return (

    <Slide {...proprietes}>
      {
        activeSlide.map((slid) => (
          <Slid key={slid.id} {...slid} />

        ))
          }
    </Slide>

  );
};

export default Slider;
