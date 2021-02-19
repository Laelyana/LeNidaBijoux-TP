import React from 'react';

import './userorder.scss';
import Order from './Order';

const UserOrder = () => (
  <div className="userorder">
    <h2>Mes commandes</h2>
    <a href="/mon-compte" className="userorder__back">Revenir au tableau de bord</a>
    <div className="userorder__list">
      <Order />
    </div>
  </div>
);

export default UserOrder;
