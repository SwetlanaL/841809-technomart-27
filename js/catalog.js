var purchaseButtons = document.querySelectorAll('.purchase');
var checkPopup = document.querySelector('.modal-check');
var checkClose = checkPopup.querySelector('.modal-close');
var toBuyingButton = checkPopup.querySelector('.back-to-buy-button');

for (var i = 0; i < purchaseButtons.length; i++) {
    purchaseButtons[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      checkPopup.classList.add('modal-check-show');
    });
}

checkClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  checkPopup.classList.remove('modal-check-show');
});

toBuyingButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (checkPopup.classList.contains('modal-check-show')) {
    evt.preventDefault();
    checkPopup.classList.remove('modal-check-show');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (checkPopup.classList.contains('modal-check-show')) {
      evt.preventDefault();
      checkPopup.classList.remove('modal-check-show');
    }
  }
});
