var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");

    this.nextElementSibling.classList.toggle("show");
  }
}


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

  $(document).ready(function(){
    $('.slider-4').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      centerMode:false,
      slidesToShow:4,
      slidesToScroll:1
    });
  });

  $(document).ready(function(){
    $('.slider-2').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      centerMode:true,
      slidesToShow:2,
      slidesToScroll:1
    });
  });

  $('.slider-123').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-123',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
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

