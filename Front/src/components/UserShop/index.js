import React from 'react';
import CartItem from './CartItems';

import './usershop.scss';

const UserShop = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="usershop">
      <h2>Mon panier</h2>
      <a href="/mon-compte" className="usershop__back"><div>Revenir au tableau de bord</div></a>
      <a href="/" className="usershop__back"><div>Continuez mes achats</div></a>

      <h2> Détails de votre commande</h2>
      <div className="usershop__list">
        {
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        }
      </div>
    </div>
  );
};
export default UserShop;
