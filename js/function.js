const $window = $(window);

/* Preloader Effect */
$window.load(function () {
  $(".preloader").fadeOut(400);
});

/* Top Menu */
$('#navigation ul li a').on('click', function () {
  const id = $(this).attr('href');
  const h = parseFloat($(id).offset().top);
  $('body,html').stop().animate({
    scrollTop: h - 70
  }, 800);

  return false;
});

/* Sticky header */
$window.scroll(function () {
  if ($window.scrollTop() > 200) {
    $('.navbar').addClass('sticky-header');
  } else {
    $('.navbar').removeClass('sticky-header');
  }
});

/* slick nav */
$('#main-menu').slicknav({
  prependTo: '#responsive-menu',
  closeOnClick:true,
  label: '',
});

/*OwlCarousels Testimonial Start*/
$('#testimonial-slider').owlCarousel({
  loop: true,
  items: 3,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },

    768: {
      items: 2
    },

    1024: {
      items: 3
    }
  },
  nav: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
});
