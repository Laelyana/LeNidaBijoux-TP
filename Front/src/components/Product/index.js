import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import './Product.scss';
import { addToCard } from '../../actions/shop';
import { addToFavorite, removeFavorite } from '../../actions/favoritesAdd';

function handleClick__un() {
  const general = document.getElementById('general');
  general.className = 'product__box__img--un image__un';
}

function handleClick__deux() {
  const general = document.getElementById('general');
  general.className = 'product__box__img--un image__deux';
}

function handleClick__trois() {
  const general = document.getElementById('general');
  general.className = 'product__box__img--un image__trois';
}
/* function handleClick__fav() {
  const btnFav = document.getElementById('fav');
  const txtFav = document.querySelector('product__box__cart--btn-fav-txt');
  if (btnFav.className === 'product__box__cart--btn-fav') {
    btnFav.className = 'product__box__cart--btn-fav-add';
    btnFav.innerHTML = '&#9733;';
  }
  else {
    btnFav.className = 'product__box__cart--btn-fav';
    btnFav.innerHTML = 'Ajouter aux favoris';
  }
} */

const Product = ({ product, status, favorites }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
  };
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
    dispatch(addToFavorite(product));
  };
  const handleRemoveFavorite = (product) => {
    dispatch(addToFavorite(product));
    dispatch(removeFavorite(product));
  };
  console.log(favorites);
  return (

    <div className="product">
      <div className="product__box__img ">
        <div className="product__box__img--un image__un" id="general" />
        <div className="product__box__img__sub">
          <div className="product__box__img__sub--unBis image__un " id="bis" onClick={handleClick__un} onMouseOver={handleClick__un} />
          <div className="product__box__img__sub--deux image__deux" id="deux" onClick={handleClick__deux} onMouseOver={handleClick__deux} />
          <div className="product__box__img__sub--trois image__trois" id="trois" onClick={handleClick__trois} onMouseOver={handleClick__trois} />
        </div>
      </div>
      <div className="product__box__txt">
        <div className="product__box__txt--title"><h5>{product.name}</h5></div>
        <div className="product__box__cart--price" id="prix">{product.price} Euros</div>
        <div className="product__box__txt--quantite">Il reste {product.stock} exemplaires en stock</div>

        <div className="product__box__cart">
          <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité" />
          {status && (<button type="button" onClick={() => handleAddToCart(product)} className="product__box__cart--btn-add">Ajouter au panier</button>)}
          {!status && (
          <button type="submit" className="product__box__cart--btn-fav" id="fav" onClick={() => handleAddToFavorite(product)}>
            <div className="product__box__cart--btn-fav-txt">Ajouter aux favoris</div>
          </button>
          )}
          {!status && (
          <button type="submit" className="product__box__cart--btn-fav" id="fav" onClick={() => handleRemoveFavorite(product)}>
            <div className="product__box__cart--btn-fav-txt">&#9733;</div>
          </button>
          )}
        </div>
        <div className="product__box__txt--description">{product.description}</div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
