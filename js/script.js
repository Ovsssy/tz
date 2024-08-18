new Swiper('.services__slider',{
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
    },
    keyboard: {
        enabled: true
    },
    simulateTouch: false,

    breakpoints:{
        340:{
            slidesPerView: 1
        },
        1280:{
            slidesPerView: 3
        }
    },
    watchOverflow: true,
    noSwipingClass: 'swiper-no-swiping',
        noSwiping: true
});

new Swiper('.doctors__slider',{
    navigation: {
        nextEl: '.doctors-swiper-btn-next',
        prevEl: '.doctors-swiper-btn-prev'
    },
    keyboard: {
        enabled: true
    },
    //slidesPerView: 1.5,
    simulateTouch: false,
    watchOverflow: true,
});