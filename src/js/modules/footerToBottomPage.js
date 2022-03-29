export default function footerToBottomPage() {
	if (document.querySelector('footer') && !CSS.supports('display', 'flex')) {
		const main = document.querySelector('main'),
			footer = document.querySelector('footer');

		main.style.minHeight = document.body.offsetHeight + 'px';
		main.style.paddingBottom = footer.offsetHeight + 'px';
		footer.style.marginTop = -footer.offsetHeight + 'px';
		footer.style.opacity = 1;
	}
}
