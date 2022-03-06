var $ = jQuery;

$(window).bind("load", function() {
	$('.reviews_slider').find(".owl-carousel").owlCarousel({
		dots:					false,
		items:					1,
		loop:					true,
		margin:					0,
		nav:					true,
		// navText:				["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		navText:				["<img src='/images/arrow2.png' alt='prev' />","<img src='/images/arrow.png' alt='' />"],

		/* responsive:{
			0:{
				items:		1
			},
			600:{
				items:		2
			},
			1000:{
				items:		3
			}
		} */
	})
});




