function slider (wrapperSelector, fieldSelector, slidesSelector) {
    const wrapper = document.querySelector(wrapperSelector),
		  field = document.querySelector(fieldSelector),
		  slides = document.querySelectorAll(slidesSelector),
		  width = window.getComputedStyle(wrapper).width;

		console.log(width);
	let offset = 0;
	let counter = 1;

	// wrapper.style.width = '100%';
	field.style.width = 100 * slides.length + '%';

	slides.forEach(item => {
		item.style.width = width;
	});

	field.style.display = 'flex';
	field.style.transition = '1s all';
	wrapper.style.overflow = 'hidden';
	wrapper.style.position = 'relative';

	const dots = document.createElement('ol');
	const prev = document.createElement('div');
	const next = document.createElement('div');
	prev.classList.add('promo__slider_prev');
	next.classList.add('promo__slider_next');
	prev.innerHTML = '<img src="./icons/slider/arrowLeft.png" alt="left">';
	next.innerHTML = '<img src="./icons/slider/arrowRight.png" alt="right">';
	wrapper.append(dots);
	const dotsArr = [];
	dots.classList.add('promo__slider_dots');
	slides.forEach((item, i) => {
		const dot = document.createElement('li');
		dots.append(dot);
		dot.setAttribute('data-slide', i+1);
		dotsArr[i] = dot;
	});

	dots.insertAdjacentElement("afterbegin", prev);
	dots.insertAdjacentElement("beforeend", next);

	function delLetter(arg) {
		return +(arg.replace(/\D/g, ''));
	}

	function setActiveDot () {
		dotsArr.forEach(item => {
			item.classList.remove('promo__slider_active');
			if (item.getAttribute('data-slide') == counter) {
				item.classList.add('promo__slider_active');
			console.log(item);
		}
		});
	}
	
	prev.addEventListener('click', e => {
		if (offset == 0) {
			offset = delLetter(width) * (slides.length - 1);
			counter = slides.length;
		} else {
			offset -= delLetter(width);
			counter--;
		}
		field.style.transform = `translateX(-${offset}px)`;
		console.log(offset);
		setActiveDot();
	});

	next.addEventListener('click', e => {
		if (offset == delLetter(width) * (slides.length - 1)) {
			offset = 0;
			counter = 1;
		} else {
			offset += delLetter(width);
			counter++;
		}
		field.style.transform = `translateX(-${offset}px)`;
		console.log(offset);
		setActiveDot();
	});

	dots.addEventListener('click', e => {
			const slideTo = e.target.getAttribute('data-slide');
			if (e.target.getAttribute('data-slide')){
			offset = delLetter(width) * (slideTo -1);
			counter = slideTo;
			setActiveDot();
			console.log(offset);
			field.style.transform = `translateX(-${offset}px)`;
		}
	});
	setActiveDot();
}

export default slider;