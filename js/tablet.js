const screenHeight = window.innerHeight;

const nav = document.querySelector('.nav-links');
const logo = document.querySelector('.logo-container');
const bigCircle = document.querySelector('.big-circle');
const midCircle = document.querySelector('.medium-circle');
const smallCircle = document.querySelector('.small-circle');

const img = document.querySelector('.introduction .cover img');
const productName = document.querySelector('.introduction .product-name');
const intro = document.querySelector('.introduction .intro');
const price = document.querySelector('.introduction .price');
const btn = document.querySelector('button');


const tl = new TimelineMax();

tl.fromTo(productName, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut })
  .fromTo(intro, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.4")
  .fromTo(price, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.5")
  .fromTo(btn, 1, { opacity: "0" }, { opacity: "1", ease: Power2.easeIn }, "-=.93")
  .fromTo(img, 2.5, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.85")
  .fromTo(bigCircle, 1.5, { height: "0" }, { height: "70vh", ease: Power2.easeInOut }, "-=1.8")
  .fromTo(midCircle, 1, { height: "0" }, { height: "50%", ease: Power2.easeInOut }, "-=.93")
  .fromTo(smallCircle, 1.2, { height: "0" }, { height: "30%", ease: Power2.easeInOut }, "-=.95")