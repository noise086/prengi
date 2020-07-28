$(document).ready(function() {
	
	// $('#price__form form').validate();
	
		

	function validateForm(form) {
		$(form).validate({

			debug: true,
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
				required: true,
				email: true
				}
			},
			messages: {
				name: "Введите Ваше Имя",
				phone: "Введите Ваш номер телефона",
				email: {
					required: "Введите Ваш Email",
					email: "Формат Email должен быть name@domain.com"
				}
				}
			});
		}

	validateForm('#price-form form');
	validateForm('#quastions-form form');

	$('.feed__carousel').slick({
		// centerMode: true,
		// centerPadding: '60px',
		dots: false,
		speed: 1200,
		// fade: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/feedback/arrow_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/feedback/arrow_right.png"></button>',
		slidesToShow: 1,
	  });
		
});