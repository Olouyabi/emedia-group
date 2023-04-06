
/************************************************
 * Animation
 */
AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});
/*
 * Animation
 ************************************************/
 

/************************************************
 * scrolling-active
 */

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let windowPosition = window.scrollY > 0;
  let bg = document.querySelector('.bg');
  header.classList.toggle("scrolling-active", windowPosition);
  bg.classList.toggle('bg-scroll', windowPosition);
});

/*
 * scrolling-active
 ************************************************/

/************************************************
 * Navbar toggler
 */
var navToggler = document.querySelector(".navtoggler");
var navCloser = document.querySelector(".close-menu");
var menu = document.querySelector(".menu");
var enveloppe = document.querySelector(".enveloppe");

navToggler.addEventListener("click", function () {
  menu.classList.add("show-menu");
  enveloppe.classList.add('blur');
});

navCloser.addEventListener("click", function () {
  menu.classList.remove("show-menu");
  enveloppe.classList.remove('blur');
});

enveloppe.addEventListener("click", function () {
  menu.classList.remove("show-menu");
  enveloppe.classList.remove('blur');
});
/*
 * Navbar toggler
 ************************************************/
/************************************************
 * Hero slide
 */

var siteCarousel = function () {
  if ($(".nonloop-block-13").length > 0) {
    $(".nonloop-block-13").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      autoplay: true,
      autoHeight: true,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
      responsive: {
        600: {
          margin: 0,
          stagePadding: 10,
          items: 1,
        },
        1000: {
          margin: 0,
          stagePadding: 0,
          items: 1,
        },
        1200: {
          margin: 0,
          stagePadding: 0,
          items: 1,
        },
      },
    });
  }

  $(".nonloop-block-13").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    autoplay: true,
    stagePadding: 0,
    margin: 20,
    nav: true,
    navText: [
      '<span class="icon-arrow_back">',
      '<span class="icon-arrow_forward">',
    ],
    responsive: {
      600: {
        margin: 0,
        stagePadding: 0,
        items: 2,
      },
      1000: {
        margin: 0,
        stagePadding: 0,
        items: 2,
      },
      1200: {
        margin: 0,
        stagePadding: 0,
        items: 3,
      },
    },
  });

  if ($(".slide-one-item").length > 0) {
    $(".slide-one-item").owlCarousel({
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "flipInX",
      pauseOnHover: false,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
    });
  }

  var owl = $(".centernonloop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      600: {
        items: 3,
      },
    },
  });

  $(".customNextBtn").click(function (event) {
    event.preventDefault();
    owl.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function (event) {
    event.preventDefault();
    owl.trigger("prev.owl.carousel");
  });
};
siteCarousel();


$('#partenaire-carousel').owlCarousel({
  nav: false,
  loop: true,
  margin: 20,
  autoplay: true,
  pauseOnHover: true,
  dots: true,
  responsive: {
    0: {
      items: 2,
      margin: 0
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    },
  }
});


/******************************************* Gotop ******************/

var siteScroll = function () {
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $('.gototop').fadeIn(500);
    } else {
      $('.gototop').fadeIn(500);
    }
  });

  $(window).scroll(function () {

    var st = $(this).scrollTop();

    if (st > 200) {
      $('.gototop').addClass('active');
    } else {
      $('.gototop').removeClass('active');
    }

  })
};
siteScroll();

var siteCarousel = function () {
  if ($(".nonloop-block-13").length > 0) {
    $(".nonloop-block-13").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      autoplay: true,
      autoHeight: true,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
      responsive: {
        600: {
          margin: 0,
          stagePadding: 10,
          items: 1,
        },
        1000: {
          margin: 0,
          stagePadding: 0,
          items: 1,
        },
        1200: {
          margin: 0,
          stagePadding: 0,
          items: 1,
        },
      },
    });
  }

  $(".nonloop-block-13").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    autoplay: true,
    stagePadding: 0,
    margin: 20,
    nav: true,
    navText: [
      '<span class="icon-arrow_back">',
      '<span class="icon-arrow_forward">',
    ],
    responsive: {
      600: {
        margin: 0,
        stagePadding: 0,
        items: 2,
      },
      1000: {
        margin: 0,
        stagePadding: 0,
        items: 2,
      },
      1200: {
        margin: 0,
        stagePadding: 0,
        items: 3,
      },
    },
  });

  if ($(".slide-one-item").length > 0) {
    $(".slide-one-item").owlCarousel({
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "flipInX",
      pauseOnHover: false,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
    });
  }

  var owl = $(".centernonloop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      600: {
        items: 3,
      },
    },
  });

  $(".customNextBtn").click(function (event) {
    event.preventDefault();
    owl.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function (event) {
    event.preventDefault();
    owl.trigger("prev.owl.carousel");
  });
};
siteCarousel();

$('#partenaire-carousel').owlCarousel({
  nav: false,
  loop: true,
  margin: 20,
  autoplay: true,
  pauseOnHover: true,
  dots: true,
  responsive: {
    0: {
      items: 2,
      margin: 0
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    },
  }
});

if ( $('.nonloop-block-14').length > 0 ) {
  $('.nonloop-block-14').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    autoplay: true,
    margin: 20,
    smartSpeed: 900,
    nav: true,
    dots: true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    responsive:{
      600:{
        margin: 20,
        stagePadding: 0,
        items: 1
      },
      1000:{
        margin: 20,
        stagePadding: 0,
        items: 1
      }
      
    }
  });
}
  
var siteIstotope = function() {
  /* activate jquery isotope */
  var $container = $('#portfolio').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'button', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters button').removeClass('active');
    $(this).addClass('active');
  });
};
siteIstotope();

$('.fancybox').on('click', function() {
  var visibleLinks = $('.fancybox');

  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

  return false;
});




