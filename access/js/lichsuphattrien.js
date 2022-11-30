jQuery(document).ready(function($) {
	$('.period').on('click', function() {
		$('.period.active').removeClass('active');
		$(this).addClass('active');
	})

	const defaultOffsetTop = document.getElementById('period-line').offsetTop;

	$(window).on('scroll', function() {
		var scrollOffsetY = $(window).scrollTop() + 250;
		for (const iterator of $('.year')) {
			if (iterator.offsetTop + defaultOffsetTop <= scrollOffsetY) {
				iterator.classList.add('active')
			} else {
				iterator.classList.remove('active')
			}
		}
	})
})