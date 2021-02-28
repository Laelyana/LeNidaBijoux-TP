import React from 'react';
import PropTypes from 'prop-types';
import imgUrl from 'src/utils/imgUrl';

import './slide.scss';


const Slid = ({ id, picture }) => (

  <img id={id} className="slider__img" src={`${imgUrl()}${picture}`} alt="" />
);

export default Slid;
