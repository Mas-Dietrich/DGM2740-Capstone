let year = document.querySelector('#date')
let d = new Date()

year.innerHTML = d.getFullYear()

const hb= document.querySelector('#hamburgerBtn');

hb.addEventListener('click', ()=> {
    document.querySelector('#primaryNav').classList.toggle('open');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Autoplay
    autoplay: {
        delay: 5000,
    }
});