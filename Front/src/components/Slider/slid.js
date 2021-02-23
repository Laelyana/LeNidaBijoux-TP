import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




import './slider.scss';



const Slid = ({id, picture}) => (
   <div className="each-slide">
  <img id={id} className="slider__img" src={picture} alt="" />
  </div>
);




export default Slid;

