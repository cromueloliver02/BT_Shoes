$(document).ready(function () {
  // SCROLL ANIMATION
  function deafultNav() {
    document.getElementById('main-nav').classList.remove('navbar-solid');
    document.getElementById('main-nav').classList.remove('bg-light');
    document.getElementById('main-nav').classList.replace('py-3', 'py-4');
  }
  function solidNav() {
    document.getElementById('main-nav').classList.add('navbar-solid');
    document.getElementById('main-nav').classList.add('bg-light');
    document.getElementById('main-nav').classList.replace('py-4', 'py-3');
  }
  function getViewportTopDistance() {
    const scrollTop = $(window).scrollTop(),
      elementOffset = $('#showcase').offset().top,
      distance = scrollTop - elementOffset;

    return distance;
  }
  if (getViewportTopDistance() < 5) {
    deafultNav();
  } else {
    solidNav();
  }
  window.addEventListener('scroll', function () {
    if (getViewportTopDistance() < 5) {
      deafultNav();
    } else {
      solidNav();
    }
    // document.querySelector('.dark-overlay').classList.replace('dark-overlay-d-block', 'dark-overlay-d-none');
  });

  /* SMOOTH SCROLLING */
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });

  // NAVBAR TOGGLER
  const navbar = document.getElementById('main-nav');
  function toggleNavbar() {
    if (getViewportTopDistance() < 5) {
      document.getElementById('main-nav').classList.toggle('navbar-solid');
      document.getElementById('main-nav').classList.toggle('bg-light');
    }
  }
  navbar.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('navbar-toggler') ||
      e.target.parentElement.classList.contains('navbar-toggler')
    ) {
      toggleNavbar();
    }
  });

  // BIG SALE COUNTDOWN
  let t = 229929;
  function getRealTime() {
    t -= 1;
    let days = Math.floor(t / (1 * 60 * 60 * 24));
    let hours = Math.floor((t % (1 * 60 * 60 * 24)) / (1 * 60 * 60));
    let minutes = Math.floor((t % (1 * 60 * 60)) / (1 * 60));
    let seconds = Math.floor((t % (1 * 60)) / 1);
    document.getElementById(
      'time-remaining'
    ).innerText = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
  }

  setInterval(() => {
    getRealTime();
  }, 1000);

  // FEATURED PRODUCTS AND NEW ARRIVAL SLIDER
  $('.featured-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // BLOGS SLIDER
  $('.blogs-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // TESTIMONIAL SLIDER
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  // AOS
  AOS.init();

  const statsTopOffset = $('#statistics').offset().top;
  let countUpFinished = false;
  $(window).scroll(function () {
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function () {
        const element = $(this);
        const endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  // CART
  document
    .getElementById('cart-toggler')
    .addEventListener('click', function () {
      document.getElementById('cart').classList.toggle('cart-collapse');
      document
        .querySelector('.dark-overlay')
        .classList.replace('dark-overlay-d-block', 'dark-overlay-d-none');
      // setTimeout(() => {
      //    document.querySelector('.dark-overlay').classList.add('d-none')
      // }, 1000);
    });
  document
    .getElementById('navbar-menu')
    .addEventListener('click', function (e) {
      if (
        e.target.id === 'cart-btn' ||
        e.target.parentElement.id === 'cart-btn'
      ) {
        document.getElementById('cart').classList.toggle('cart-collapse');
        document
          .querySelector('.dark-overlay')
          .classList.replace('dark-overlay-d-none', 'dark-overlay-d-block');
      }

      e.preventDefault();
    });

  // const cartSidebar = document.getElementById('cart');
  // function outsideCartSidebar(e) {
  //    // if (e.target == cartSidebar) {
  //    //    console.log(2);
  //       // cartSidebar.classList.toggle('cart-collapse');
  //    // }
  // }
  // cartSidebar.addEventListener('click', outsideCartSidebar);
  const darkOverlay = document.querySelector('.dark-overlay');
  darkOverlay.addEventListener('click', function () {
    document.getElementById('cart').classList.toggle('cart-collapse');
    document
      .querySelector('.dark-overlay')
      .classList.replace('dark-overlay-d-block', 'dark-overlay-d-none');
  });
});
