jQuery(document).ready(function($) {
	$('.building-dream-content').slick({
		prevArrow: '<svg class="left" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 8.33594L15.6694 19.2217C15.2842 19.671 15.2842 20.3342 15.6694 20.7836L25 31.6693" stroke="#DAA622" stroke-width="1.5" stroke-linecap="round"/></svg>',
		nextArrow: '<svg class="right" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8.33594L24.3306 19.2217C24.7158 19.671 24.7158 20.3342 24.3306 20.7836L15 31.6693" stroke="#DAA622" stroke-width="1.5" stroke-linecap="round"/></svg>',
		autoplaySpeed: 2500,
		arrows: true,
		infinite: true,
		dots: true,
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					slidesToScroll: 1,
				}
			},
		]
	});
});