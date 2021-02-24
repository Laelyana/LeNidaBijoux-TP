import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import './Product.scss';
import { addToCard } from '../../actions/shop';

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

const Product = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
  };
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
        <div className="product__box__txt--title">{product.name}</div>
        <p>{product.description}</p>
        <div className="product__box__txt--quantite">Il reste {product.stock} exemplaires en stock</div>
      </div>
      <div className="product__box__cart">
        <div className="product__box__cart--price" id="prix">{product.price}<h5>Euros</h5></div>
        <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité" />
        <button type="button" onClick={() => handleAddToCart(product)} className="product__box__cart--btn-add">Ajouter au panier</button>
        <button type="submit" className="product__box__cart--btn-fav">Ajouter aux favoris</button>

      </div>

    </div>

  );
};
Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
