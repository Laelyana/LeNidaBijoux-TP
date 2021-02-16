import React from 'react';


import './Product.scss';

function handleClick__un() {
  let general = document.getElementById("general");
  general.className = "product__box__img--un image__un";
}

function handleClick__deux() {
  let general = document.getElementById("general");
  general.className = "product__box__img--un image__deux";
}

function handleClick__trois() {
  let general = document.getElementById("general");
  general.className = "product__box__img--un image__trois";
}


const Product = () => (

<div className="product">
<div className="product__box__img ">
<div className="product__box__img--un image__un" id="general"></div>
<div className="product__box__img__sub">
<div className="product__box__img__sub--unBis image__un " id="bis" onClick={handleClick__un} onMouseOver={handleClick__un}></div>
<div className="product__box__img__sub--deux image__deux" id="deux" onClick={handleClick__deux} onMouseOver={handleClick__deux}></div>
<div className="product__box__img__sub--trois image__trois" id="trois" onClick={handleClick__trois} onMouseOver={handleClick__trois}></div>
</div>
</div>
<div className="product__box__txt">
  <div className="product__box__txt--title">Titre de l'article</div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
<div className="product__box__txt--quantite">Il reste 2 exemplaires en stock</div>
</div>
<div className="product__box__cart">
  <div className="product__box__cart--price" id="prix">40<h5>Euros</h5></div>
  <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité"></input>
  <button className="product__box__cart--btn-add">Ajouter au panier</button>
  <button className="product__box__cart--btn-fav">Ajouter aux favoris</button>
  
  </div>
  
</div>

);


export default Product;
