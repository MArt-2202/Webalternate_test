export default function blockStyles() {
	if (document.querySelector('.header__nav a span')) {
		document.querySelectorAll('.header__nav a span').forEach((el) => {
			if (el.closest('a').hasAttribute('data-title')) {
				return;
			}
			el.closest('a').setAttribute('data-title', el.textContent);
		});
	}

	if (document.querySelector('.steps-list')) {
		if (window.matchMedia('(min-width: 1025px)').matches) {
			document.querySelectorAll('.steps-list__item').forEach((el) => {
				const title = el.querySelector('strong'),
					detail = el.querySelector('.steps-list__detail');

				detail.style.width = title.clientWidth + 'px';
				detail.style.height = title.clientHeight + 'px';
			});
		}
	}

	if (document.querySelector('.steps-list')) {
		if (window.matchMedia('(max-width: 1024px)').matches) {
			document.querySelectorAll('.steps-list__item').forEach((el) => {
				const detail = el.querySelector('.steps-list__detail');

				detail.style.width = '';
				detail.style.height = '';
			});
		}
	}
}
