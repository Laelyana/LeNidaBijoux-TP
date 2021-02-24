import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, quantity }) => (
  <div className="usershop__list--item">
    <h5 className="usershop__list--item--name">{name}</h5>
    <input type="number" placeholder="Quantité" defaultValue={quantity} />
    <div>{price}</div>
    <button type="button" className="usershop__list--item--button">Supprimer</button>
  </div>
);
export default CartItem;
