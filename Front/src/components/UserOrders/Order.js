import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ date }) => (
  <div className="userorder__list--item">
    <h5 className="userorder__list--item--name">Votre commande du {date} </h5>
    <button type="button" className="userorder__list--item--button">Consulter</button>
  </div>
);

export default Order;
