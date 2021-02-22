import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
Categories.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Categories;
