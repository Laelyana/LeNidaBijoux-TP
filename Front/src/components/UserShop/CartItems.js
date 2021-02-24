import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCard, reduceCartItem, removeCard } from '../../actions/shop';

const CartItem = (product) => {
  const dispatch = useDispatch();
  const {
    name,
    price,
    quantity,
    id,
  } = product;
  const handleRemoveCartItem = (id) => {
    dispatch(
      removeCard({
        id,
      }),
    );
  };
  const handleAddProduct = (product) => {
    dispatch(
      addToCard(product),
    );
  };

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product),
    );
  };

  return (
  /*   <div className="usershop__list--item">
        <h5 className="usershop__list--item--name">{name}</h5>
        <input type="number" placeholder="Quantité" defaultValue={quantity} />
        <div>{price}</div>
        <button type="button" onClick={() => handleRemoveCartItem(id)} className="usershop__list--item--button">Supprimer</button>
      </div> */

    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            {name}
          </td>
          <td>
            <span
              className="cartBtn"
              onClick={() => handleReduceItem(product)}
            >
              {'< '}
            </span>
            <span>
              {quantity}
            </span>
            <span
              className="cartBtn"
              onClick={() => handleAddProduct(product)}
            >
              {' >'}
            </span>
          </td>
          <td>
            {price}€
          </td>
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(id)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CartItem;
