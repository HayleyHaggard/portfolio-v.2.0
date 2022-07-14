$(function () {

  $('.header__btn').on('click', function () {
    $('.header').toggleClass('header--active');
  })

  AOS.init({
    disable: function () {
      let maxWidth = 1200;
      return window.innerWidth < maxWidth;
    },
    startEvent: 'DOMContentLoaded',
    offset: 100,
    delay: 200,
    duration: 800,
    once: true,
  });

});

