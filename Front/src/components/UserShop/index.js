import React from 'react';

import './usershop.scss';

const UserShop = () => (
  <div className="usershop">
    <h2>Mon panier</h2>
    <a href="/mon-compte" className="usershop__back">Revenir au tableau de bord</a>
    <div className="usershop__list">
      <div className="usershop__list--item">
        <h5 className="usershop__list--item--name">Produit n°1</h5>
        <input type="number" placeholder="Quantité"></input>
        <div>Prix</div>
        <button className="usershop__list--item--button">Consulter</button>
      </div>
      <div className="usershop__list--item">
        <h5 className="usershop__list--item--name">Produit n°2</h5>
        <input type="number" placeholder="Quantité"></input>
        <div>Prix</div>
        <button className="usershop__list--item--button">Consulter</button>
      </div>
      <div className="usershop__list--item">
        <h5 className="usershop__list--item--name">Produit n°3</h5>
        <input type="number" placeholder="Quantité"></input>
        <div>Prix</div>
        <button className="usershop__list--item--button">Consulter</button>
      </div>
    </div>
  </div>
)

export default UserShop;
