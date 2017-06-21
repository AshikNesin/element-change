'use strict';
/* globals document, MutationObserver */
const elementReady = require('element-ready');

module.exports = (selector, onChange) => {
	// When the DOM element is ready
	return elementReady(selector)
		.then(() => {
			// Configuration of the observer:
			const config = {childList: true, subtree: true};
			// Create an observer instance
			const observer = new MutationObserver(records => onChange(records));

			const target = document.querySelector(selector);
			observer.observe(target, config);
		});
};
