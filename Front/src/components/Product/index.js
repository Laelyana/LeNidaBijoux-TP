import React from 'react';


import './Product.scss';


let general = document.getElementById("general");
  
  function bis() {
    general.className = "product__box__img--un image__bis";
    console.log('clic');
  };
  
  function deux() {
    general.className = "product__box__img--un image__deux";
  };
  
  function trois() {
    general.className = "product__box__img--un image__trois";
  };
  

const Product = () => (
<div className="product">
<div className="product__box__img">
<div className="product__box__img--un image__un" id="general"></div>
<div className="product__box__img__sub">
<div className="product__box__img__sub--unBis image__un" id="bis" onClick={bis}></div>
<div className="product__box__img__sub--deux image__deux" id="deux" onClick={deux}></div>
<div className="product__box__img__sub--trois image__trois" id="trois" onClick={trois}></div>
</div>
</div>
<div className="product__box__txt">
  <div className="product__box__txt--title">Titre de l'article</div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
</div>
<div className="product__box__cart">
  <div className="product__box__cart--price">40$</div>
  <input className="product__box__cart--number" type="number" id="nomber" name="nomber" min="0" max="100" placeholder="Quantité"></input>
  <button className="product__box__cart--btn-add">Ajouter au panier</button>
  <button className="product__box__cart--btn-fav">Ajouter aux favoris</button>
  
  </div>
</div>
);


export default Product;
