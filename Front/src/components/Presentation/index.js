import React from 'react';

import "./presentation.scss";

import presentation1 from './presentation-1.jpg';
import presentation2 from './presentation-2.jpg';

const Presentation = () => (
  <div className="presentation">
    <div className="presentation__article">
      <img src={presentation1} alt="#" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non
	rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
    </div>
    <div className="presentation__article">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non
	rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
      <img src={presentation2} alt="#" />
    </div>
  </div>
)

export default Presentation;
