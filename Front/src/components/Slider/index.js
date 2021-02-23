import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Slid from './slid';


import './slide.scss';


const proprietes = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  

  return (
        <div className="containerSlide">
            <Slide {...proprietes}>
            {
            slider.map((slid) => (
              <Slid key={slid.id} {...slid} />

            ))
          }
            </Slide>
        </div>
    )
}

export default Slider;

