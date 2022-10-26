jQuery(document).ready(function ($) {
	$(document).on('click', '.nav-item-icon-search', function () {
		$('.nav-item-icon-search').addClass("is-active");
		$('.navbar').addClass("nav-is-active");
		$(".search").addClass("is-active");
		$(".close-button").addClass("is-active")
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
})