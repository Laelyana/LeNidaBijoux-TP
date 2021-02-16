import React, { useEffect } from 'react';

import './categories.scss';
import Categorie from './Categorie';


const Categories = ({ manageLoad, categories }) => {
  useEffect(
    manageLoad,
    [],
  )

<<<<<<< HEAD
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
=======
  return (
    <div className="categories">
    {
      categories.map((categorie) => (
>>>>>>> front

      <Categorie key={categorie.id} {...categorie} />
      ))
    }
    </div>
  )
}

export default Categories;
