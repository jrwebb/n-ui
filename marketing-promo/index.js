const superstore = require('superstore-sync');
const expander = require('o-expander');
const oViewport = require('o-viewport');


function init () {
	el = document.querySelector('#marketing-promo');

console.log('marketing promo', el)

	if (!el) {
		return;
	}
	else {
		// TALK TO MARKETING PROMO API HERE
		el.removeAttribute('hidden');
	}
};

module.exports = { init };
