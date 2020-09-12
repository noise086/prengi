$(document).ready(function() {
	
	// $('#price__form form').validate();
	
		

	// function validateForm(form) {
	// 	$(form).validate({

	// 		debug: true,
	// 		rules: {
	// 			name: {
	// 				required: true,
	// 				minlength: 2
	// 			},
	// 			phone: "required",
	// 			email: {
	// 			required: true,
	// 			email: true
	// 			}
	// 		},
	// 		messages: {
	// 			name: "Введите Ваше Имя",
	// 			phone: "Введите Ваш номер телефона",
	// 			email: {
	// 				required: "Введите Ваш Email",
	// 				email: "Формат Email должен быть name@domain.com"
	// 			}
	// 			}
	// 		});
	// 	}

	// validateForm('#price-form form');
	// validateForm('#quastions-form form');

	$('.promo__slider').slick({
		dots: false,
		speed: 1200,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrowLeft.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrowRight.png"></button>',
		slidesToShow: 1,
	  });
		
});