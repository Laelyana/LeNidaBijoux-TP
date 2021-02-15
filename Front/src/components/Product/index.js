import React from 'react';


import './Product.scss';

const Product = () => (
  <div className="product">
<div className="product__box__img">
<div className="product__box__img--un image__un"></div>
<div className="product__box__img__sub--unBis image__un"></div>
<div className="product__box__img__sub--deux image__deux"></div>
<div className="product__box__img__sub--trois image__trois"></div>
</div>
<div className="product__box__txt">
  <div className="product__box__txt--title">Titre de l'article</div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
</div>
<div className="product__box__cart">
  <div className="product__box__cart--price">40$</div>
  
  </div>
</div>
);


export default Product;
