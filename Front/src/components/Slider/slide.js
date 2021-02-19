dimport React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './slider.scss';


const Slide = ({id, picture}) => (

  <img id={id} className="slider__img" src={picture} alt="" />
 
);




export default Slide;
