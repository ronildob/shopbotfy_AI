var swiper = new Swiper(".mySwiper",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});
