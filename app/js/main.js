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

  const themeBtn = document.getElementById('theme-btn')
  const app = document.getElementById('app-root')

  function chosenTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      app.classList.add('theme-dark');
    }
    if (localStorage.getItem('theme') === 'theme-light') {
      app.classList.add('theme-light');
    }
  }

  const themeChange = () => {
    if (app.classList.contains('theme-light')) {
      app.classList.remove('theme-light');
      app.classList.add('theme-dark');
      localStorage.removeItem('theme', 'theme-light')
      localStorage.setItem('theme', 'theme-dark')
    } else {
      app.classList.remove('theme-dark');
      app.classList.add('theme-light');
      localStorage.removeItem('theme', 'theme-dark')
      localStorage.setItem('theme', 'theme-light')
    }
  }

  themeBtn.addEventListener('click', themeChange)
  chosenTheme()
});

