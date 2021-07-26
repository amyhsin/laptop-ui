// footer button
const menuButton = document.querySelectorAll('.footer-container i')

for (let i = 0; i < menuButton.length; i++) {
  $('.footer-container .item-container' + i).hide();
}

for (let i = 0; i < menuButton.length; i++) {
  if ($(window).innerWidth() >= 601) {
    $('.footer-container .item-container' + i).show();
  }
}

for (let i = 0; i < menuButton.length; i++) {
  $('#menuBtn' + i).click(() => {
    $('.footer-container .item-container' + i).toggle('slow');
  })
}
