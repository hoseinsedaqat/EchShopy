const productColSwiperOption = {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1300: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
}


export { productColSwiperOption }