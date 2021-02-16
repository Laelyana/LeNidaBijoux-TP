import React from 'react';

import './categories.scss';


const Categories = () => (
  <div className="categories">

    <div className="cat cat__img cat__img--un">
      <a href="/categorie/produits" style="display:block;width:100%;height:100%;">
        <div className="cat__center">
          <div className="cat__center--title">Titre de la catégorie</div>
        </div>
      </a>
    </div>

    <div className="cat cat__img cat__img--deux">
      <a href="/categorie/produits">
        <div className="cat__center">
          <div className="cat__center--title">Titre de la catégorie</div>
        </div>
      </a>
    </div>

    <div className="cat cat__img cat__img--trois">
      <a href="/categorie/produits">
        <div className="cat__center">
          <div className="cat__center--title">Titre de la catégorie</div>
        </div>
      </a>
    </div>

  </div>
)

export default Categories;
