const title = document.querySelector('.banner-container .title');
const input = document.querySelector('.banner-container input');
const key = document.querySelector('.password');
const tool = document.querySelector('.repair');
const bill = document.querySelector('.bill');


const tl = new TimelineMax();


tl.fromTo(input, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0" })
  .fromTo(title, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0" }, "-=.6")
  .fromTo(key, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0" }, "-=.6")
  .fromTo(tool, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0" }, "-=.8")
  .fromTo(bill, 1, { opacity: "0", y: "-40" }, { opacity: "1", y: "0" }, "-=.8")

