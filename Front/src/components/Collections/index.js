import React, { useEffect } from 'react';


import Collection from './Collection';

import './collections.scss';


const Collections = ({ manageLoad, collections }) => {
  useEffect(
    manageLoad,
    [],
    )
  return (
    <div className="collections">
    {
      collections.map((collection) => (
      <Collection key={collection.id} {...collection}/>
      
      ))
    }
    </div>
  )
};

export default Collections;
