var $ = jQuery;

$(window).bind("load", function() {
	topmenu_link_active();

	$(window).resize(windowResize);

	$(window).scroll(function() {
		topmenu_link_active();
	});



	function topmenu_link_active() {
		if ( $(".topmenu").length
			&& $(".block_feedback").length
			&& $(".block_contacts").length
			&& $(".block_reviews").length
			&& $(".block_video").length
			&& $(".block_villas").length ) {
			$(".topmenu").find("a").removeClass("active");

			if ( $(window).scrollTop() > ($(".block_feedback").offset().top - 100) ) {
				$("*[data-link=block_feedback]").addClass("active");
			}
			else if ( $(window).scrollTop() > ($(".block_contacts").offset().top - 100) ) {
				$("*[data-link=block_contacts]").addClass("active");
			}
			else if ( $(window).scrollTop() > ($(".block_reviews").offset().top - 100) ) {
				$("*[data-link=block_reviews]").addClass("active");
			}
			else if ( $(window).scrollTop() > ($(".block_video").offset().top - 100) ) {
				$("*[data-link=block_video]").addClass("active");
			}
			else if ( $(window).scrollTop() > ($(".block_villas").offset().top - 100) ) {
				$("*[data-link=block_villas]").addClass("active");
			}
			else {
				$("*[data-link=block_1]").addClass("active");
			}
		}
	}

	// when window resizing
	function windowResize() {
		topmenu_link_active();
	}
});




