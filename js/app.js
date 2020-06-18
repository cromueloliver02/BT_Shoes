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
         distance = (scrollTop - elementOffset);

      return distance;
   }
   if (getViewportTopDistance() < 5) {
      deafultNav();
   } else {
      solidNav();
   }
   window.addEventListener('scroll', function () {
      // if (this.scrollY < 5) {
      //    deafultNav();
      // } else {
      //    solidNav();
      // }
      if (getViewportTopDistance() < 5) {
         deafultNav();
      } else {
         solidNav();
      }
   });

   /* SMOOTH SCROLLING */
   $('a').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 70
            },
            800
         );
      }
   });

   // BIG SALE COUNTDOWN
   function getRealTime() {
      // const deadline = new Date('June 30, 2020 0:0:0').getTime();
      const deadline = 1592539200000;
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);
      document.getElementById('time-remaining').innerText = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
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
      autoplaySpeed: 5000
   });

   // BLOGS SLIDER
   $('.blogs-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
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
      cssEase: 'linear'
   });

   // AOS
   AOS.init();

   const statsTopOffset = $("#statistics").offset().top;
   let countUpFinished = false;
   $(window).scroll(function () {
      if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
         $(".counter").each(function () {
            const element = $(this);
            const endVal = parseInt(element.text());

            element.countup(endVal);
         })

         countUpFinished = true;
      }
   });

   // CART
   document.getElementById('cart-toggler').addEventListener('click', function () {
      document.getElementById('cart').classList.toggle('cart-collapse');
      document.querySelector('.dark-overlay').classList.replace('dark-overlay-d-block', 'dark-overlay-d-none');
      // setTimeout(() => {
      //    document.querySelector('.dark-overlay').classList.add('d-none')
      // }, 1000);
   });
   document.getElementById('navbar-menu').addEventListener('click', function (e) {
      if (e.target.id === 'cart-btn' || e.target.parentElement.id === 'cart-btn') {
         document.getElementById('cart').classList.toggle('cart-collapse');
         document.querySelector('.dark-overlay').classList.replace('dark-overlay-d-none', 'dark-overlay-d-block');
      }

      e.preventDefault();
   });

   // const cartSection = document.getElementById('cart');
   // document.addEventListener('click', function (e) {
   //    if (e.target !== cartSection) {
   //       console.log(e.target);
   //       cartSection.classList.add('cart-collapse');
   //    }

   //    e.preventDefault();
   // });
});