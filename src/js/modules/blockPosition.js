export default function blockPosition() {
	const bl1 = document.querySelector('.toggle-wrapper > div > div'),
		bl2 = document.querySelector('.header__bl-1'),
		bl3 = document.querySelector('.header__bl-2'),
		bl4 = document.querySelector('.header__nav'),
		bl5 = document.querySelector('.header__order-btn'),
		bl6 = document.querySelector('.header__phone'),
		bl7 = document.querySelector('.top-section__bl-1'),
		bl8 = document.querySelector('.top-section__bl-2'),
		bl9 = document.querySelector('.top-section__bl-1 h1'),
		bl10 = document.querySelector('.callback-form label'),
		bl11 = document.querySelector('.callback-form div'),
		bl12 = document.querySelector('.feedback__anchor'),
		bl13 = document.querySelector('.feedback__help'),
		bl14 = document.querySelector('.feedback__add');

	if (window.matchMedia('(min-width: 1401px)').matches) {
		document.body.classList.remove('mobile-xs');

		if (!document.body.classList.contains('mobile-lg')) {
			document.body.classList.add('mobile-lg');

			if (document.querySelector('.mobile-lg')) {
				if (bl2 && bl5) {
					bl2.append(bl5);
				}
				if (bl5 && bl6) {
					bl5.after(bl6);
				}
				if (bl3 && bl4) {
					bl3.append(bl4);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 1400px)').matches) {
		document.body.classList.remove('mobile-lg');

		if (!document.body.classList.contains('mobile-xs')) {
			document.body.classList.add('mobile-xs');

			if (document.querySelector('.mobile-xs')) {
				if (document.querySelector('.mobile-xs')) {
					if (bl1 && bl5) {
						bl1.prepend(bl5);
					}
					if (bl5 && bl6) {
						bl5.after(bl6);
					}
					if (bl1 && bl4) {
						bl1.append(bl4);
					}
				}
			}
		}
	}

	if (window.matchMedia('(min-width: 769px)').matches) {
		document.body.classList.remove('tableset', 'mobile-small');

		if (!document.body.classList.contains('mobile-big')) {
			document.body.classList.add('mobile-big');

			if (document.querySelector('.mobile-big')) {
				if (bl7 && bl8) {
					bl7.after(bl8);
				}

				if (bl10 && bl11) {
					bl11.before(bl10);
				}

				if (bl12 && bl13) {
					bl12.after(bl13);
				}
			}
		}
	}

	// if (window.matchMedia('(min-width: 1201px)').matches) {
	// 	document.body.classList.remove('mobile-small', 'tableset');

	// 	if (!document.body.classList.contains('desktop')) {
	// 		document.body.classList.add('desktop');

	// 		if (document.querySelector('.desktop')) {
	// 		}
	// 	}
	// }

	// if (window.matchMedia('(max-width: 1200px)').matches) {
	// 	document.body.classList.remove('desktop');

	// 	if (!document.body.classList.contains('tableset')) {
	// 		document.body.classList.add('tableset');

	// 		if (document.querySelector('.tableset')) {
	// 		}
	// 	}
	// }

	if (window.matchMedia('(max-width: 768px)').matches) {
		document.body.classList.remove('desktop', 'mobile-big');

		if (!document.body.classList.contains('mobile-small')) {
			document.body.classList.add('mobile-small');

			if (document.querySelector('.mobile-small')) {
				if (bl8 && bl9) {
					bl9.after(bl8);
				}

				if (bl10 && bl11) {
					bl11.after(bl10);
				}

				if (bl13 && bl14) {
					bl14.after(bl13);
				}
			}
		}
	}
}
