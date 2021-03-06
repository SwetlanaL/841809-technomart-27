var purchaseButtons = document.getElementsByClassName('purchase');
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

var emailPopupButton = document.querySelector('.email-button');
var emailPopup = document.querySelector('.modal-email');
var emailClose = emailPopup.querySelector('.modal-close');
var form = emailPopup.querySelector('form');
var userName = emailPopup.querySelector('[name=name]');
var userEmail = emailPopup.querySelector('[name=email]');
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
}

emailPopupButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  emailPopup.classList.add('modal-email-show');
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

emailClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  emailPopup.classList.remove('modal-email-show');
  emailPopup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    emailPopup.classList.remove('modal-error');
    emailPopup.offsetWidth = emailPopup.offsetWidth;
    emailPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (emailPopup.classList.contains('modal-email-show')) {
      evt.preventDefault();
      emailPopup.classList.remove('modal-email-show');
      emailPopup.classList.remove('modal-error');
    }
  }
});

var mapLink = document.querySelector('.map-link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-map-show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-map-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-map-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-map-show');
    }
  }
});


function myTabs() {
    let serviceTabs = document.querySelectorAll('.service-tab'),
        tabContent = document.querySelectorAll('.service-item'),
        tabName;

    serviceTabs.forEach(item => {
        item.addEventListener('click', selectTabs)
    });

    function selectTabs() {
        serviceTabs.forEach(item => {
            item.classList.remove('tab-active');
        });
        this.classList.add('tab-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        });
    }
};

myTabs();

let dots = document.getElementsByClassName('circle'),
    dotsArea = document.querySelector('.slider-controls'),
    slides = document.getElementsByClassName('slides'),
    arrowBack = document.querySelector('.arrow-left'),
    arrowForward = document.querySelector('.arrow-right'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('circle-active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('circle-active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

arrowBack.onclick = function () {
    plusSlides(-1);
}
arrowForward.onclick = function () {
    plusSlides(1);
}
dotsArea.onclick = function (evt) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (evt.target.classList.contains('circle') && evt.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}
