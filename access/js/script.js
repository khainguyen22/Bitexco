$('.icones-carousel').slick({
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    autoplay: false,
    autoplaySpeed: 2500,
    dots: true,
    vertical: true,
    arrows: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 700,
        settings: {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
