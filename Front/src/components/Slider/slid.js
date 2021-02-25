import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './slide.scss';


const Slid = ({id, picture}) => (
  
  <img id={id} className="slider__img" src={picture} alt="" />
);


export default Slid;

