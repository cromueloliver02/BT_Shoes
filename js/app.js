$(document).ready(function () {
   // SCROLL ANIMATION
   window.addEventListener('scroll', function () {
      if (this.scrollY < 2) {
         document.getElementById('main-nav').classList.remove('bg-light');
         document.getElementById('main-nav').classList.remove('main-nav-shadow');
      } else {
         document.getElementById('main-nav').classList.add('bg-light');
         document.getElementById('main-nav').classList.add('main-nav-shadow');
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

   document.getElementById('cart-toggler').addEventListener('click', function () {
      document.getElementById('cart').classList.toggle('cart-collapse');
   });

   document.getElementById('navbar-menu').addEventListener('click', function (e) {
      if (e.target.id === 'cart-btn' || e.target.parentElement.id === 'cart-btn') {
         document.getElementById('cart').classList.toggle('cart-collapse');
      }

      e.preventDefault();
   });
});