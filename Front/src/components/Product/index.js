import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import './Product.scss';
import imgUrl from 'src/utils/imgUrl';
import { addToCard } from '../../actions/shop';
import { addToFavorite, removeFavorite } from '../../actions/favoritesAdd';

const Product = ({
  product, status, favorites, isLogged,
}) => {
  function handleClick__un() {
    const general = document.getElementById('general');
    general.style.backgroundImage = `url(${imgUrl()}${product.picture1})`;
  }

  function handleClick__deux() {
    const general = document.getElementById('general');
    general.style.backgroundImage = `url(${imgUrl()}${product.picture2})`;
  }

  function handleClick__trois() {
    const general = document.getElementById('general');
    general.style.backgroundImage = `url(${imgUrl()}${product.picture3})`;
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

  const dispatch = useDispatch();
  const productId = product.id;
  const productStock = product.stock;
  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
    window.alert('Produit ajouté au panier');
  };
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
    dispatch(addToFavorite(product));
  };
  const handleRemoveFavorite = (productId) => {
    dispatch(addToFavorite(productId));
    dispatch(removeFavorite(productId));
  };
  console.log(isLogged);
  console.log(productStock);
  console.log(favorites);
  const newArray = [];
  favorites.forEach((favorite) => newArray.push(favorite.id));
  console.log(newArray);
  const compare = newArray.includes(productId);
  console.log(compare);

  const msgStock = (productStock) => {
    if (productStock > 0) {
      return `Il reste ${productStock} exemplaire(s) en stock`;
    }
    return 'Bientôt disponible...';
  };
  const style = (productStock) => {
    if (productStock === 0) {
      return 'red';
    }
    return '';
  };
  console.log(style());

  return (

    <div className="product">
      <div className="product__box__img ">
        <div style={{ backgroundImage: `url(${imgUrl()}${product.picture1})` }} className="product__box__img--un image__un" id="general" />
        <div className="product__box__img__sub">
          <div style={{ backgroundImage: `url(${imgUrl()}${product.picture1})` }} className="product__box__img__sub--unBis image__un " id="bis" onClick={handleClick__un} onMouseOver={handleClick__un} />
          {product.picture2 != null && (<div style={{ backgroundImage: `url(${imgUrl()}${product.picture2})` }} className="product__box__img__sub--deux image__deux" id="deux" onClick={handleClick__deux} onMouseOver={handleClick__deux} />)}
          {product.picture3 != null && (<div style={{ backgroundImage: `url(${imgUrl()}${product.picture3})` }} className="product__box__img__sub--trois image__trois" id="trois" onClick={handleClick__trois} onMouseOver={handleClick__trois} />)}
        </div>
      </div>
      <div className="product__box__txt">
        <div className="product__box__txt--title"><h5>{product.name}</h5></div>
        <div className="product__box__cart--price" id="prix">{product.price != null && (product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }))}</div>
        {status && (<div className="product__box__txt--quantite" style={{ color: style(productStock) }}>{msgStock(productStock)}</div>)}

        <div className="product__box__cart">
          {/* <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité" /> */}
          {isLogged && status && product.price != null && product.stock > 0 && (<button type="button" onClick={() => handleAddToCart(product)} className="product__box__cart--btn-add">Ajouter au panier</button>)}
          {isLogged && !status && !compare && (
            <button type="submit" className="product__box__cart--btn-fav" id="fav" onClick={() => handleAddToFavorite(product)}>
              <div className="product__box__cart--btn-fav-txt">Ajouter aux favoris</div>
            </button>
          )}
          {isLogged && !status && compare && (
            <button type="submit" className="product__box__cart--btn-fav" id="fav" onClick={() => handleRemoveFavorite(productId)}>
              <div className="product__box__cart--btn-fav-txt-star">&#9733;</div>
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
