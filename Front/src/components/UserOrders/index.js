import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './userorder.scss';
import Order from './Order';

const UserOrder = ({ manageLoad, orders }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="userorder">
      <h2 className="userorder--title">Mes commandes</h2>
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

UserOrder.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default UserOrder;
