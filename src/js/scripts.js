'use strict';
import debounce from './modules/debounce';
import footerToBottomPage from './modules/footerToBottomPage';

document.addEventListener('DOMContentLoaded', () => {
	debounce(function () {
		footerToBottomPage();
	}, 200);
}); // END READY
window.addEventListener('resize', () => {
	debounce(function () {
		footerToBottomPage();
	}, 200);
});

window.addEventListener('load', () => {});
