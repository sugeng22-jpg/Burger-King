const hamburger = document.querySelector(".nav-extra a");
const navmenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    navmenu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navmenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    navmenu.classList.remove("active");
    overlay.classList.remove("active");
});

const swiper = new Swiper('.ulasan-wrapp', {
  loop: true,
  grapCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});