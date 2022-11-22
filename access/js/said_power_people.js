jQuery(document).ready(function($) {
	$('.quote-nav-img').on('click', function() {
		$('.quote-nav-img.active').removeClass('active');
		$(this).addClass('active');
		$('.quote-agency-img.active').removeClass('active');
		$('.agency-' + $(this).attr('data-number')).addClass('active');
		$('.quote-text-inner.active').removeClass('active');
		$('.quote-text-' + $(this).attr('data-number')).addClass('active');
	})

	$pause = true;
	$interval = setInterval(() => {
		if ($pause) {
			$element_active = $('.quote-nav-img.active').attr('data-number')
			$element_active = parseInt($element_active)
			if ($element_active == 8) {
				$element_active = -1;
			}
			$next_elemenet = $element_active + 1;
			$('.quote-nav-img.active').removeClass('active')
			$('.quote-nav-img-'+ $next_elemenet.toString()).addClass('active');
			$('.quote-agency-img.active').removeClass('active')
			$('.agency-'+ $next_elemenet.toString()).addClass('active');
			$('.quote-text-inner.active').removeClass('active')
			$('.quote-text-'+ $next_elemenet.toString()).addClass('active');
		}
	}, 3000);

	$('.quote-nav-img').on('mouseover', function() {
		$pause = false;
	})

	$('.quote-nav-img').on('mouseout', function() {
		$pause = true;
	})
})