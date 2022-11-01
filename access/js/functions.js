jQuery(document).ready(function ($) {
	$(document).on('click', '.nav-item-icon-search', function () {
		$('.nav-item-icon-search').addClass("is-active");
		$('.navbar').addClass("nav-is-active");
		$(".search").addClass("is-active");
		$(".close-button").addClass("is-active");


		$('.burger').removeClass("is-active");
		$(".menu-main-container").removeClass("is-active");
	});
	$(document).on('click', '.nav-item-icon-search.is-active', function () {
		$('.nav-item-icon-search').removeClass("is-active");
		$(".search").removeClass("is-active");
		$('.navbar').removeClass("nav-is-active");
		$(".close-button").removeClass("is-active");
	});
	$(document).on('click', '.menu-item', function () {
		$('.nav-item-icon-search').removeClass("is-active");
		$(".search").removeClass("is-active");
		$('.navbar').removeClass("nav-is-active");
		$(".close-button").removeClass("is-active");

	});
});

jQuery(document).ready(function ($) {
	$('.home-slide-carousel').slick({
		nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
		prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
		// autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		vertical: true,
		arrows: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$(document).on('click', '.burger', function () {
		$('.burger').addClass("is-active");
		$('.navbar').addClass("nav-is-active");
		$(".menu-main-container").addClass("is-active");
		$('.menu-image').addClass("is-active");
		$('.main-menu-primary').addClass("is-active");
		$('.sub-menu').addClass("is-active");
		$('.nav-item-icon-search').removeClass("is-active");
		$(".search").removeClass("is-active");
		$(".close-button").removeClass("is-active");
	});
	$(document).on('click', '.burger.is-active', function () {
		$('.burger').removeClass("is-active");
		$(".menu-main-container").removeClass("is-active");
		$('.navbar').removeClass("nav-is-active");

		$('.menu-image').removeClass("is-active");
		$('.main-menu-primary').removeClass("is-active");
		$('.sub-menu').removeClass("is-active");
	});
	$(document).on('click', '.menu-item', function () {
		$('.burger').removeClass("is-active");
		$(".menu-main-container").removeClass("is-active");
		$('.navbar').removeClass("nav-is-active");

		$('.menu-image').removeClass("is-active");
		$('.main-menu-primary').removeClass("is-active");
		$('.sub-menu').removeClass("is-active");
	});
});


$(document).ready(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
		var file = '/components/' + $(this).data('include') + '.html'
		$(this).load(file)
	});
});
jQuery(document).ready(function () { jQuery(".ecommerce-gallery").lightSlider({ gallery: true, item: 1, loop: true, thumbItem: 10, thumbMargin: 12, }); });