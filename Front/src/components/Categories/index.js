import React, { useEffect } from 'react';

import './categories.scss';
import Categorie from './Categorie';

const Categories = ({ manageLoad, categories }) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="categories">
      {
        categories.map((categorie) => (

          <Categorie key={categorie.id} {...categorie} />
        ))
      }
    </div>
  );
};

export default Categories;
