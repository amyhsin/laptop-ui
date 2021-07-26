const bigCircle = document.querySelector('.big-circle');
const midCircle = document.querySelector('.medium-circle');

const newTitle = document.querySelector('.new-product .new');
const productName = document.querySelector('.new-product .product-name');
const title = document.querySelector('.new-product .title');
const price = document.querySelector('.new-product .price');
const btn = document.querySelector('.new-product button');
const img = document.querySelector('.new-product img');

const tl = new TimelineMax();

tl.fromTo(newTitle, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut })
  .fromTo(productName, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.5")
  .fromTo(title, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.5")
  .fromTo(price, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.3")
  .fromTo(btn, 1, { opacity: "0" }, { opacity: "1", ease: Power2.easeIn }, "-=.93")
  .fromTo(img, 1.5, { opacity: "0", y: "40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=1.3")
  .fromTo(bigCircle, 1.2, { height: "0" }, { height: "80vh", ease: Power2.easeInOut }, "-=1.2")
  .fromTo(midCircle, 1, { height: "0" }, { height: "50vh", ease: Power2.easeInOut }, "-=.8")