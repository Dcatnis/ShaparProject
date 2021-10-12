var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".right_btn",
    prevEl: ".left_btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});