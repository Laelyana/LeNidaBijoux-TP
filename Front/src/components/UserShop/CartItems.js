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
  const newPrice = quantity * price;
  const goodPrice = Math.round(newPrice * 100) / 100;
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

    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            {name}
          </td>
          <td>
            <span
              className="cartBtn__moins"
              onClick={() => handleReduceItem(product)}
            >
              {'- '}
            </span>
            <span>
              {quantity}
            </span>
            <span
              className="cartBtn__plus"
              onClick={() => handleAddProduct(product)}
            >
              {' +'}
            </span>
          </td>
          <td>
            {goodPrice}€
          </td>
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(id)}>
              &#128465;
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CartItem;
