
var swiper = new Swiper(".review_container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });