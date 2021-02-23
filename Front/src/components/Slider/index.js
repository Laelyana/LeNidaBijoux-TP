import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Slid from './slid';


import './slide.scss';
import './slider.scss';



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    pauseOnHover: true,
    canSwipe: true,
}

const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );
  

  return (
        <div className="slide-container">
        
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

