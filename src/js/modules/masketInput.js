export default function masketInput() {
	if (document.querySelector('input[inputmode=tel]')) {
		document.querySelectorAll('input[inputmode=tel]').forEach((el) => {
			const element = el,
				maskOptions = {
					mask: '+{7}(000)000-00-00',
				};
			IMask(element, maskOptions);
		});
	}
}
