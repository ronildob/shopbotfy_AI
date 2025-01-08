var verticalSwiper = new Swiper('.swiper-container-vertical', {
    direction: 'vertical', // Direção vertical
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        enabled: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});