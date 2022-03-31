'use strict';
import debounce from './modules/debounce';
import footerToBottomPage from './modules/footerToBottomPage';
import blockPosition from './modules/blockPosition';
import blockStyles from './modules/blockStyles';
import tabs from './modules/tabs';
import sliders from './modules/sliders';
import masketInput from './modules/masketInput';
import toggleContent from './modules/toggleContent';

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.add('mobile-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	sliders();
	toggleContent();
	masketInput();
	debounce(function () {
		blockStyles();
		blockPosition();
		footerToBottomPage();
		tabs({});
	}, 200);
}); // END READY
window.addEventListener('resize', () => {
	debounce(function () {
		blockStyles();
		blockPosition();
		footerToBottomPage();
		tabs({});
	}, 200);
});

window.addEventListener('load', () => {});
