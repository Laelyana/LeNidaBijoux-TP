import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import './Product.scss';
import { addToCard } from '../../actions/shop';

const Product = ({ product, isLogged }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
  };



function handleClick__un() {
  const general = document.getElementById('general');
  general.style.backgroundImage = "url(http://0.0.0.0:8000/pictures/"+product.picture1+")";
}

function handleClick__deux() {
  const general = document.getElementById('general');
  general.setAttribute("src", "http://0.0.0.0:8000/pictures/" + product.picture2);
}


function handleClick__trois() {
  const general = document.getElementById('general');
  general.setAttribute("src", "http://0.0.0.0:8000/pictures/" + product.picture3);
}

function handleClick__fav() {
  const btnFav = document.getElementById('fav');
  let txtFav = document.querySelector('product__box__cart--btn-fav-txt');
  if (btnFav.className == "product__box__cart--btn-fav") {
    btnFav.className = "product__box__cart--btn-fav-add";
    btnFav.innerHTML = "&#9733;";
  }
  else {
    btnFav.className = "product__box__cart--btn-fav";
    btnFav.innerHTML = "Ajouter aux favoris";
  }
}



return (

  <div className="product">
    <div className="product__box__img ">
      <div style={{backgroundImage: "url(http://0.0.0.0:8000/pictures/" + product.picture1 + ")"}} className="product__box__img--un image__un" id="general" />
      <div className="product__box__img__sub">
        <div className="product__box__img__sub--unBis image__un " id="bis" onClick={handleClick__un} onMouseOver={handleClick__un}/>
        {product.picture2 != null &&(<img src={`http://0.0.0.0:8000/pictures/` + product.picture2} className="product__box__img__sub--deux image__deux" id="deux" onClick={handleClick__deux} onMouseOver={handleClick__deux} />)}
        {product.picture3 != null &&(<img src={`http://0.0.0.0:8000/pictures/` + product.picture3} className="product__box__img__sub--trois image__trois" id="trois" onClick={handleClick__trois} onMouseOver={handleClick__trois} />)}
      </div>
    </div>
    <div className="product__box__txt">
      <div className="product__box__txt--title"><h5>{product.name}</h5></div>
      <div className="product__box__cart--price" id="prix">{product.price !=null &&(product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }))}</div>
      <div className="product__box__txt--quantite">Il reste {product.stock} exemplaires en stock</div>

      <div className="product__box__cart">
      <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité" />
      <button type="button" onClick={() => handleAddToCart(product)} className="product__box__cart--btn-add">Ajouter au panier</button>
      <button type="submit" className="product__box__cart--btn-fav" id="fav" onClick={handleClick__fav} ><div className="product__box__cart--btn-fav-txt">Ajouter aux favoris</div></button>
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
