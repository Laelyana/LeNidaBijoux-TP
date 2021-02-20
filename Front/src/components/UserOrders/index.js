import React, { useEffect } from 'react';

import './userorder.scss';
import Order from './Order';

const UserOrder = ({ manageLoad, orders }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="userorder">
      <h2>Mes commandes</h2>
      <a href="/mon-compte" className="userorder__back">Revenir au tableau de bord</a>
      <div className="userorder__list">
        {
          orders.map((order) => (
            <Order key={order.id} {...order} />

          ))
        }
      </div>
    </div>
  );
};
export default UserOrder;
