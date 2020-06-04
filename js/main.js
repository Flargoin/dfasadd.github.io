$(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      centerMode:false,
      slidesToShow:1,
      slidesToScroll:1
    });
  });

  $(document).ready(function() {
    $('.header__burger').click(function(event){
      $('.header__burger,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  const promoButton = document.querySelector('#promo__btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

promoButton.addEventListener('click', function(event) { 
     modal.classList.add('is_open');
});

close.addEventListener('click', function(event) { 
    modal.classList.remove('is_open');
});