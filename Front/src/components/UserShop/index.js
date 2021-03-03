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
  const newTotal = Math.round(total * 100) / 100;
  return (
    <div className="checkout">
      <h2 className="checkout--title">Mon panier</h2>
    
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
                          Produit
                        </th>
                        <th>
                          Quantité
                        </th>
                        <th>
                          Prix
                        </th>
                        <th>
                          Supprimer
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody className="ligne__produits">
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
                            <tbody className="ligne__produits">
                              <tr>
                                <td>
                                  <h3>
                                    Total: {newTotal}€
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
                                  <button type="button" className="btn__achats" onClick={() => history.goBack()}>
                                    Continuer mes achats
                                  </button>
                                </td>
                                <td>
                                  <button type="button" className="btn__achats--validation" onClick={() => handleCreateOrder()}>
                                    Valider mon panier
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
      </div>
      <a href="/mon-compte" className="usershop__back"><div>Revenir au tableau de bord</div></a>
    </div>
  );
};

export default UserShop;
