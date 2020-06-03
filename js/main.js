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
      $('.header__burger,.nav__header-adaptive').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });