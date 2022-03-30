'use strict';
import debounce from './modules/debounce';
import footerToBottomPage from './modules/footerToBottomPage';
import blockPosition from './modules/blockPosition';
import blockStyles from './modules/blockStyles';
import tabs from './modules/tabs';
import toggleContent from './modules/toggleContent';

document.addEventListener('DOMContentLoaded', () => {
	toggleContent();
	blockStyles();
	debounce(function () {
		blockPosition();
		footerToBottomPage();
		tabs({});
	}, 200);
}); // END READY
window.addEventListener('resize', () => {
	debounce(function () {
		blockPosition();
		footerToBottomPage();
		tabs({});
	}, 200);
});

window.addEventListener('load', () => {});
