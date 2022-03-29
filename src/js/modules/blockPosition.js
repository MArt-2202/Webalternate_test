export default function blockPosition() {
	const bl1 = document.querySelector('.toggle-wrapper > div > div'),
		bl2 = document.querySelector('.header__bl-1'),
		bl3 = document.querySelector('.header__bl-2'),
		bl4 = document.querySelector('.header__nav'),
		bl5 = document.querySelector('.header__order-btn'),
		bl6 = document.querySelector('.header__phone');

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

	if (window.matchMedia('(min-width: 901px)').matches) {
		document.body.classList.remove('tableset', 'mobile-small');

		if (!document.body.classList.contains('mobile-big')) {
			document.body.classList.add('mobile-big');

			if (document.querySelector('.mobile-big')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 1201px)').matches) {
		document.body.classList.remove('mobile-small', 'tableset');

		if (!document.body.classList.contains('desktop')) {
			document.body.classList.add('desktop');

			if (document.querySelector('.desktop')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 1200px)').matches) {
		document.body.classList.remove('desktop');

		if (!document.body.classList.contains('tableset')) {
			document.body.classList.add('tableset');

			if (document.querySelector('.tableset')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 900px)').matches) {
		document.body.classList.remove('desktop', 'mobile-big');

		if (!document.body.classList.contains('mobile-small')) {
			document.body.classList.add('mobile-small');

			if (document.querySelector('.mobile-small')) {
			}
		}
	}
}
