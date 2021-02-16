import React from 'react';


import './Product.scss';


// let general = document.getElementByCla("general");
// let bis = document.getElementById("bis");
// let deux = document.getElementById("deux");
// let trois = document.getElementById("trois");

// bis.addEventListener("click", bisF);
// deux.addEventListener("click", deuxF);
// trois.addEventListener("click", troisF);
  
//   function bisF() {
//     general.className = bis;
//     console.log("click");
//   };
  
//   function deuxF() {
//     general.className = deux;
//   };
  
//   function troisF() {
//     general.className = trois;
//   };

// function handleClick() {

// let general = document.getElementsByClassName("product__box__img--un image__un");
// let bis = document.getElementsByClassName("product__box__img--un image__un");
// let deux = document.getElementsByClassName("product__box__img--un image__deux");
// let trois = document.getElementsByClassName("product__box__img--un image__trois");

// bis.addEventListener("click", bisF);
// deux.addEventListener("click", deuxF);
// trois.addEventListener("click", troisF);
  
//   function bisF() {
//     general.className = bis;
//     console.log("click bis");
//   };
  
//   function deuxF() {
//     general.className = deux;
//     console.log("clic deux");
//   };
  
//   function troisF() {
//     general.className = trois;
//     console.log("clic trois");
//   };
// }

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }


const Product = () => (
<div className="product">
<div className="product__box__img">
<div className="product__box__img--un image__un" id="general"></div>
<div className="product__box__img__sub">
<div className="product__box__img__sub--unBis image__un" id="bis" onClick={this.handleClick}></div>
<div className="product__box__img__sub--deux image__deux" id="deux" onClick={this.handleClick}></div>
<div className="product__box__img__sub--trois image__trois" id="trois" onClick={this.handleClick}></div>
</div>
</div>
<div className="product__box__txt">
  <div className="product__box__txt--title">Titre de l'article</div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio similique ab laboriosam explicabo velit ex, non rerum delectus quod aliquid ut, minus inventore earum dolorum magnam voluptatibus, pariatur accusantium? Eligendi.</p>
</div>
<div className="product__box__cart">
  <div className="product__box__cart--price">40$</div>
  <input className="product__box__cart--number" type="number" id="number" name="number" min="0" max="100" placeholder="Quantité"></input>
  <button className="product__box__cart--btn-add">Ajouter au panier</button>
  <button className="product__box__cart--btn-fav">Ajouter aux favoris</button>
  
  </div>
  
</div>

);


export default Product;
