import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'src/utils/card.selectors';
import { createStructuredSelector } from 'reselect';
import CartItem from './CartItems';

import './usershop.scss';
import { createOrder } from '../../actions/orders';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const UserShop = () => {
  const errMsg = "Vous n'avez pas de produit dans votre panier";
  const { cartItems, total } = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCreateOrder = (order) => {
    dispatch(createOrder(order));
  };
  return (
    <div className="checkout">
      <h2>Mon panier</h2>
      <a href="/mon-compte" className="usershop__back"><div>Revenir au tableau de bord</div></a>
      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          Product
                        </th>
                        <th>
                          Quantity
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Remove
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItems.map((cartItem) => (
                        <tr key={cartItem.id}>
                          <td>
                            <CartItem key={cartItem.id} {...cartItem} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <h3>
                                    Total: {total}€
                                  </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <button type="button" onClick={() => history.goBack()}>
                                    Continue Shopping
                                  </button>
                                </td>
                                <td>
                                  <button type="button" onClick={() => handleCreateOrder()}>
                                    Checkout
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>
            {errMsg}
          </p>
        )}
        {/* {
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        } */}
      </div>
    </div>
  );
};

export default UserShop;
