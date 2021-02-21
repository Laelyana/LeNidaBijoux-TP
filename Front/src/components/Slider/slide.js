import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




import './slider.scss';



const Slide = ({id, picture}) => (
   <div>
  <img id={id} className="slider__img noActive" src={picture} alt="" />
 </div>
);




export default Slide;
