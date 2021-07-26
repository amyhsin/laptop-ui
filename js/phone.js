const productName = document.querySelector('.banner .product-name');
const title = document.querySelector('.banner .title');
const price = document.querySelector('.banner .price');
const btn = document.querySelector('.banner button');
const banner = document.querySelector('.phone-banner');

const tl = new TimelineMax();

tl.fromTo(productName, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut })
  .fromTo(title, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.4")
  .fromTo(price, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.5")
  .fromTo(btn, 1, { opacity: "0" }, { opacity: "1", ease: Power2.easeIn }, "-=.93")
  .fromTo(banner, 1.5, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "-=.2")