import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




import './slide.scss';



const Slid = ({id, picture}) => (
  
  <div className="image-container">
  <img id={id} className="slider__img" src={picture} alt="" />
  </div>
);

export default Slid;

