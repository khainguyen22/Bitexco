jQuery(document).ready(function ($) {
  // Slick Slider for Mobile
  $(".core-value-content").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
		arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
					arrows: false
        },
      },
    ],
  });
});
