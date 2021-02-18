import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import un from './img/1.jpg';
import goldengate from './img/goldengate.jpg';

import './slider.scss';



const Slide = ({id, picture, active}) => (
   
  <div className="slider__item" id={id}><img className="slider__img" src={picture} alt="" /></div>
 
);




export default Slide;
