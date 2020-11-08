$(document).ready(function () {
  //   $(".conleft").hover(function () {
  //     $(".conleft div:first-child").css("backgroundImage", "url(../img/image/ontab.png)").end().next().css("top", "244px");
  //   }, function () {
  //     $(".conleft div:first-child").css("backgroundImage", "url(../img/image/on-ontab.png)").end().next().css("top", "181px");
  //   }
  //   );
  // $(window).width()
})



var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});


var swipertwo = new Swiper('.swiper-containertwo', {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.nextwo',
    prevEl: '.pretwo',
  },
  breakpoints: {
    1560: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    }
  },
});

