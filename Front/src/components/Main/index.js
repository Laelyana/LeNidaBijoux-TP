import React from 'react';

import './main.scss';

const Main = () => (
  <div className="main">

    <div className="card card__img card__img--un">
      <div className="card__left">
        <div className="card__title">Titre de l'article</div>
        <span className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</span>
      </div>
    </div>

    <div className="card card__img card__img--deux">
      <div className="card__center">
        <div className="card__title">Titre de l'article</div>
        <span className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</span>
      </div>
    </div>

    <div className="card card__img card__img--trois">
      <div className="card__right">
        <div className="card__title">Titre de l'article</div>
        <span className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</span>
      </div>
    </div>

  </div>
);

export default Main;
