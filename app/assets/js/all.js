// DatePicker
const elem = document.querySelector('input[id="chooseDate"]');
if(elem){
const datepicker = new Datepicker(elem, {
  // ...options
});
// const elem = document.getElementById('foo');
// const rangepicker = new DateRangePicker(elem, {
//   // ...options
// });
}
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.js-nav');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburgerActive');
  nav.classList.toggle('navActive');

})

// swiper
const swiperEl = document.querySelector('.swiper');
if(swiperEl){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
