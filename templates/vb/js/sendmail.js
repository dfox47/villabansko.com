var $ = jQuery;

$(window).bind("load", function() {
	sendmail();



	// AJAX contact form
	function sendmail() {
		var messageDelay = 2000;

		$('.feedback').find("form").submit(submitForm);

		function submitForm() {
			var contactForm = $(this);

			if (!$(this).find('.feedback_input_name').val() || !$(this).find('.feedback_input_email').val() || !$(this).find('.feedback_message').val()) {
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
});


