export default function sliders() {
	if (document.querySelector('.clients-slider')) {
		new Swiper('.clients-slider', {
			// forceToAxis: true,
			// autoplay: {
			// 	delay: 4500,
			// 	disableOnInteraction: false,
			// },
			on: {
				init() {
					if (document.querySelector('.clients-slider-wrapper')) {
						document.querySelector('.clients-slider-wrapper').classList.remove('style-1');

						document
							.querySelectorAll('.clients-slider-wrapper .clients-slider__item')
							.forEach((el, index) => {
								const count = document.createElement('span');

								index + 1 < 10
									? (count.textContent = `0${index + 1}`)
									: (count.textContent = `${index + 1}`);

								el.prepend(count);
							});
					}
				},
			},
			slidesPerView: 4,
			spaceBetween: 102,
			// loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1400: {
					spaceBetween: 102,
				},
				1200: {
					spaceBetween: 50,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				415: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				300: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			},
		});
	}
}
