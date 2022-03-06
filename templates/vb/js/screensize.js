var $ = jQuery;

$(window).bind("load", function() {
	$(window).resize(windowResize);

	// when window resizing
	function windowResize() {
		var window_height		= $(window).height(),
			window_width		= $(window).width();

		$(".screensize_x").text( window_width );
		$(".screensize_y").text( window_height );
	}
});




