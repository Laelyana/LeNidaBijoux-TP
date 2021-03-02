import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection';

import './collections.scss';

const Collections = ({ manageLoad, collections }) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="collections">
      {
        collections.map((collection) => (
          <Collection key={collection.id} {...collection} />

        ))
      }
    </div>
  );
};
Collections.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Collections;
