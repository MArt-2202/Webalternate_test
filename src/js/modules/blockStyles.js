export default function blockStyles() {
	if (document.querySelector('.header__nav a span')) {
		document.querySelectorAll('.header__nav a span').forEach((el) => {
			el.closest('a').setAttribute('data-title', el.textContent);
		});
	}
}
