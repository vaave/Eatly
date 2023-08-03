const body = document.querySelector('body');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});


$(document).ready(function(){
   
  const reviewSlider = $('.review__inner')

  $(reviewSlider).slick({
    dots: true,
    arrows: false,
    infinite: false,
    waitForAnimate: false,
    speed: 1000,
    variableWidth: true,
    responsive: [
       {
         breakpoint: 768,
         settings: {
          variableWidth: false,
         }
       },
    ]
 });

 $('.slick-current .review__header').addClass('active');

 $(reviewSlider).on('afterChange', function(event, slick, currentSlide) {
    
    $('.slick-slide .review__header').removeClass('active');
    $('.slick-current .review__header').addClass('active');
 });

});

const openModalBtns = document.getElementsByClassName('modal-button');
const modals = document.getElementsByClassName('modal');
const closeBtns = document.getElementsByClassName('modal__close');

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function() {
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    body.classList.add('lock');
  });
}

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function() {
    closeModal();
  });
}

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

function closeModal() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('show');
    if (window.innerWidth > 424) {
      body.classList.remove('lock')
    }
  }
}

const icon = document.querySelectorAll('.modal__form-decor');
const input = document.querySelectorAll('.modal__form-input--password');

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener('click', function() {
    icon[i].classList.toggle('clicked');

    if (input[i].getAttribute('type') == 'password') {
      input[i].setAttribute('type', 'text');
    } else {
      input[i].setAttribute('type', 'password');
    }
  });
};