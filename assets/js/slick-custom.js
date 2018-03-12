//Carrusel Aboutus
$(document).ready(function(){
  $('.aboutus-carrusel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
	});
});

//Carrusel Aboutus Responsive
$('.aboutus-carrusel2').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Carrusel Success
$(document).ready(function(){
  $('.success-carrusel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });
});