const screenHeight = window.innerHeight;
const nav = document.querySelector('.nav-links');
const logo = document.querySelector('.logo-container');
const bigCircle = document.querySelector('.big-circle');
const midCircle = document.querySelector('.medium-circle');
const smallCircle = document.querySelector('.small-circle');


const tl = new TimelineMax();

tl.fromTo(nav, 1.2, { opacity: "0", y: "-40" }, { opacity: "1", y: "0", ease: Power2.easeInOut }, "+=.3")
  .fromTo(logo, 1.2, { opacity: "0", x: "-40" }, { opacity: "1", x: "0", ease: Power2.easeInOut }, "-=.5")
  .fromTo(bigCircle, 1.5, { height: "0" }, { height: "70vh", ease: Power2.easeInOut }, "-=1.2")
  .fromTo(midCircle, 1, { height: "0" }, { height: "50%", ease: Power2.easeInOut }, "-=.8")
  .fromTo(smallCircle, 1.2, { height: "0" }, { height: "30%", ease: Power2.easeInOut }, "-=1")

