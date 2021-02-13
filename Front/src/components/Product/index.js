import React from 'react';


import './Product.scss';

const Product = () => (
  <div className="product">
<div className="product__box__img">
<div className="product__box__img--un">img big</div>
<div className="product__box__img--unBis">img little 1</div>
<div className="product__box__img--deux">img little 2</div>
<div className="product__box__img--trois">img little 3</div>
</div>
<div className="product__box__txt">
  <div className="product__box__txt--title">Titre de l'article</div>
</div>
</div>
);


export default Product;
