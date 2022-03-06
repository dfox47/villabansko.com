var $ = jQuery;

$(window).bind('load', function() {
	var pathname        = window.location.pathname,
		url             = window.location.href,
		isMobile        = false,
		header_height   = $(".header").height(),
		window_height   = $(window).height(),
		window_width    = $(window).width();

	// mobile device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	//block_villas_img();
	book_dates_calendar();

	item_img_carousel();
	// play_button_add();
	// play_video();
	placeholder_hide();

	sendmail_date();

	windowResize();

	$(window).resize(windowResize);

	$(window).scroll(function() {});

	$('.block_1_bg').find('.owl-carousel').owlCarousel({
		autoplay:           true,
		autoplaySpeed:      1000,
		autoplayTimeout:    5000,
		dots:               true,
		items:              1,
		loop:               true,
		margin:             0
	});

	$('body').on('click', '.feedback_select_apts', function() {
		$(".feedback_select_apts_list").toggleClass("active");
	});

	$('body').on('click', '.feedback_select_apts_list li', function() {
		var apt       = $(this).attr('data-apt');
		var apt_title = $(this).text();

		$(this).parent().parent().find(".feedback_select_apts_choose").text(apt_title);
		$(this).parent().removeClass("active").parent().find("input").val(apt);
	});

	$('body').on('click', '.item_img_more_block', function() {
		var img_src = $(this).find("img").attr("src");

		$(".item_img_more_block").removeClass("active");

		$(this).addClass("active");

		$(".item_img_main").attr("src", img_src);
	});

	$('body').on('click', '.item_img_main_nav_next', function() {
		var current_img = $(this).parent().parent().find(".item_img_more_block.active");

		$(current_img).parent().next().find("img").click();
	});

	$('body').on('click', '.item_img_main_nav_prev', function() {
		var current_img = $(this).parent().parent().find(".item_img_more_block.active");

		$(current_img).parent().prev().find("img").click();
	});

	$('body').on('click', '.popup_open', function() {
		var ajax_link       = $(this).attr("data-ajax"),
			ajax_window     = $(this).attr("data-ajax-window"),
			current_lang    = $("html").attr("lang");

		$('.' + ajax_window).addClass("active").find(".popup_content_ajax").load("/" + current_lang + "/" + ajax_link + " .item_body", function() {
			book_dates_calendar();

			item_img_carousel();

			placeholder_hide();

			sendmail_date();
		});

		$("body, html").addClass("overflow_hidden");
	});

	$('body').on('click', '.popup_bg', function() {
		$(this).parent().removeClass("active");

		$("body, html").removeClass("overflow_hidden");
	});

	$('body').on('click', '.popup_close', function() {
		$(this).parent().parent().removeClass("active");

		$("body, html").removeClass("overflow_hidden");
	});



	// remove class preload from body to activate transitions
	$('body').removeClass('preload no_js');

	$('.block_1_down').find('> span').click(function() {
		$('body,html').animate({
			scrollTop: $('.block_villas').offset().top - header_height
		}, 700);
	});

	$('.mobile_menu_show').click(function() {
		$(".mobile_menu").toggleClass("active");
		$(this).toggleClass("menu_active");
		$("body, html").toggleClass("overflow_hidden");
	});

	$('.mobile_menu').find("a").click(function() {
		$(".mobile_menu, .mobile_menu_show").removeClass("active");
		$(".mobile_menu_show").removeClass("menu_active");
		$("body, html").removeClass("overflow_hidden");
	});

	$('.mobile_menu, .topmenu').find("a").click(function() {
		if ( !$(this).attr("data-link") == '' ) {
			var link = $(this).attr("data-link");

			$('body,html').animate({
				scrollTop: $("." + link).offset().top - header_height
			}, 700);
		}

		return false;
	});

	function block_villas_img() {
		$('.block_villas_img').find("> img").each(function() {
			var img_big = $(this).attr("data-img-big");
			var img_small = $(this).attr("data-img-small");

			$(this).attr("src", img_big);
		});
	}

	function book_dates_calendar() {
		$('.feedback_field_date_in').datepicker();
		$('.feedback_field_date_out').datepicker();
	}

	function item_img_carousel() {
		$('.item_img_more').find(".owl-carousel").owlCarousel({
			dots:		false,
			items:		7,
			margin:		15,
			nav:		true,
			navText:	["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],

			responsive : {
				0 : {
					items: 3
				},
				400 : {
					items: 4
				},
				500 : {
					items: 5
				},
				600 : {
					items: 6
				},
				700 : {
					items: 7
				}
			}
		})
	}

	function placeholder_hide() {
		$('.feedback_field input, .feedback_field textarea').focus(function() {
			$(this).data('placeholder',$(this).attr('placeholder'))
				.attr('placeholder','');
			}).blur(function() {
				$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}

	function play_button_add() {
		$('.video_preview').each(function() {
			if ( !$(this).find(".bt_play").length ) {
				$(this).append("<div class='bt_play'><i class='fa fa-play'></i></div>");
			}
		});
	}

	function play_video() {
		$("body").on('click', ".video_preview", function() {
			// if it is youtube preview image
			if ($(this).find("img").attr("src").indexOf("youtube") !== -1) {
				$(this).find("img").hide();
				$(this).find("img").parent().addClass("active").append("<iframe src=\"//www.youtube.com/embed/" + $(this).find("img").attr("src").replace("http://img.youtube.com/vi/", "").replace("/mqdefault.jpg", "") + "?autoplay=1\"></iframe>");
			}
			// if it is vimeo image
			else if ($(this).find("img").attr("class").indexOf("vimeo") !== -1) {
				$(this).find("img").hide();
				$(this).find("img").parent().addClass("active").append("<iframe src=\"//player.vimeo.com/video/" + $(this).find("img").attr("data-vimeo-id") + "?autoplay=1\"></iframe>");
			}
		});
	}

	function sendmail_date() {
		var messageDelay = 2000;

		$('.feedback2').find("form").submit(submitForm);

		function submitForm() {
			var contactForm = $(this);

			if (!$(this).find('.feedback_input_name').val() ||
				!$(this).find('.feedback_input_email').val() ||
				!$(this).find('.feedback_field_date_in').val() ||
				!$(this).find('.feedback_field_date_out').val()) {
				$('.feedback_incomplete').addClass("active").delay(messageDelay).queue(function() {
					$(this).removeClass("active").dequeue();
				});

			}
			else {
				$(this).find('.feedback_sending').addClass("active");

				$.ajax({
					url:		contactForm.attr('action') + "?ajax=true",
					type:		contactForm.attr('method'),
					data:		contactForm.serialize(),
					success:	submitFinished
				});
			}

			return false;
		}

		function submitFinished(response) {
			response = $.trim(response);
			$('.feedback_sending').removeClass("active");

			if (response == "success") {
				$('.feedback_success').addClass("active").delay(messageDelay).queue(function() {
					$(this).removeClass("active").dequeue();
				});
			}
			else {
				$('.feedback_fail').addClass("active").delay(messageDelay).queue(function() {
					$(this).removeClass("active").dequeue();
				});
			}
		}
	}



	// when window resizing
	function windowResize() {
		var window_height = $(window).height();
		var window_width  = $(window).width();

		var block_villas_img_height = $('.block_villas_links').find('> a:first-child').find('.block_villas_img').height();
		var block_villas_img_width  = $('.block_villas_links').find('> a:first-child').find('.block_villas_img').width();



		if ( (block_villas_img_width / block_villas_img_height) < (624 / 375) ) {
			$(".block_villas_links").addClass("block_villas_links_vertical");
			$(".block_villas_links").removeClass("block_villas_links_horizontal");
		}
		else {
			$(".block_villas_links").removeClass("block_villas_links_vertical");
			$(".block_villas_links").addClass("block_villas_links_horizontal");
		}

		if ( window_width < 900 ) {
			$(".bg").css({
				'margin-left': 0
			});
		}
		else if ( (window_width / window_height) < (16 / 8) ) {
			$(".bg").css({
				'margin-left': window_width / 2
			});
		}
		else {
			$(".bg").css({
				'margin-left': 0
			});
		}

		// no mobile
		if ( window_height > 600 && window_width > 900 && isMobile == false ) {
			var block_height           = window_height - header_height;
			var block_items_img_height = block_height / 4;

			$('.block').css({
				'height': block_height
			});

			$('.block_items_img').css({
				'height': block_items_img_height
			});

			if ( (window_width / block_height) < (1497 / 998) ) {
				$(".block_1_bg").find("img").css({
					'height': "100%",
					'width':  "auto"
				});
			}
			else {
				$(".block_1_bg").find("img").css({
					'height': "auto",
					'width':  "100%"
				});
			}

			if ( (window_width / block_height) < (1400 / 827) ) {
				$(".block_feedback_bg, .block_reviews_bg").find("img").css({
					'height':			"100%",
					'width':			"auto"
				});
			}
			else {
				$(".block_feedback_bg, .block_reviews_bg").find("img").css({
					'height':			"auto",
					'width':			"100%"
				});
			}

			if ( ($('.block_items_img').width() / block_items_img_height ) > ( 318 / 191 ) ) {
				$('.block_items_img').find("img").css({
					'height':		"auto",
					'width':		"100%"
				});
			}
			else {
				$('.block_items_img').find("img").css({
					'height':		"100%",
					'width':		"auto"
				});
			}
		}
		// is mobile
		else {
			var block_height           = $('.block_1').height() + 200;
			var block_feedback_height  = $('.block_feedback').height() + 100;
			var block_revies_height    = $('.block_reviews').height() + 100;
			var block_items_height     = $('.block_items').height() + 100;
			var block_items_img_height = block_items_height / 4;

			$('.block').css({
				'height': 'auto'
			});

			if ( (window_width / block_height) < (1497 / 998) ) {
				$(".block_1_bg").find("img").css({
					'height': "100%",
					'width':  "auto"
				});
			}
			else {
				$(".block_1_bg").find("img").css({
					'height': "auto",
					'width':  "100%"
				});
			}

			if ( (window_width / block_feedback_height) < (1400 / 827) ) {
				$(".block_feedback_bg").find("img").css({
					'height': "100%",
					'width':  "auto"
				});
			}
			else {
				$(".block_feedback_bg").find("img").css({
					'height': "auto",
					'width':  "100%"
				});
			}

			if ( (window_width / block_revies_height) < (1400 / 827) ) {
				$(".block_reviews_bg").find("img").css({
					'height': "100%",
					'width':  "auto"
				});
			}
			else {
				$(".block_reviews_bg").find("img").css({
					'height': "auto",
					'width':  "100%"
				});
			}
		}

		if ( ($(".contacts_img").width() / $(".contacts_img").height()) > ( 297 / 338 ) ) {
			$('.contacts_img').find("img").css({
				'height': "auto",
				'width':  "100%"
			});
		}
		else {
			$('.contacts_img').find("img").css({
				'height': "100%",
				'width':  "auto"
			});
		}
	}
});




