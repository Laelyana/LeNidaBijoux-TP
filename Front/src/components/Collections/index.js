import React from 'react';

import './collections.scss';


const collections = () => (
  <div className="collections">

    <div className="col col__img col__img--un">
      <a href="/collection/produits">
        <div className="col__center">
          <div className="col__center--title">Titre de la collection</div>
        </div>
      </a>
    </div>

    <div className="col col__img col__img--deux">
      <a href="/collection/produits">
        <div className="col__center">
          <div className="col__center--title">Titre de la collection</div>
        </div>
      </a>
    </div>

    <div className="col col__img col__img--trois">
      <a href="/collection/produits">
        <div className="col__center">
          <div className="col__center--title">Titre de la collection</div>
        </div>
      </a>
    </div>

  </div>
)

export default collections;
