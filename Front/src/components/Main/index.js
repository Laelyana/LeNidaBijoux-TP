import React from 'react';

import './main.scss';

const Main = () => (
  <div className="main">

    <div className="card card__img--pierre">
    <div className="card__infos--pierre">
        <div className="card__title--dev">Pierre</div>
        <span className="txt">
        <h6>Frontend </h6>
        <h5>Product Owner</h5>
        <h5>Référent React</h5>  </span>
      </div>
    </div>

    <div className="card card__img--benoit">
    <div className="card__infos--benoit">
        <div className="card__title--dev">Benoit</div>
        <span className="txt">
        <h6>Frontend </h6>
        <h5>Lead Dev Front</h5>
        <h5>Git Master</h5>  </span>
      </div>
    </div>
    
    <div className="card card__img--lauriane">
    <div className="card__infos--lauriane">
        <div className="card__title--dev">Lauriane</div>
        <span className="txt">
        <h6>Backend</h6>
        <h5>Scrum Master</h5>
       </span>
      </div>
    </div>

    <div className="card card__img--nicolas">
    <div className="card__infos--nicolas">
        <div className="card__title--dev">Nicolas</div>
        <span className="txt">
        <h6>Backend </h6>
        <h5>Lead Dev Back</h5>
        <h5>Référent Symfony</h5>
       </span>
      </div>
    </div>


  </div>
);

export default Main;
