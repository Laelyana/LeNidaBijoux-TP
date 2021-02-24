import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../actions/shop';

const CartItem = ({
  name, price, quantity, id,
}) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = (id) => {
    dispatch(
      removeCard({
        id,
      }),
    );
  };

  return (
    <div className="usershop__list--item">
      <h5 className="usershop__list--item--name">{name}</h5>
      <input type="number" placeholder="Quantité" defaultValue={quantity} />
      <div>{price}</div>
      <button type="button" onClick={() => handleRemoveCartItem(id)} className="usershop__list--item--button">Supprimer</button>
    </div>
  );
};
export default CartItem;
