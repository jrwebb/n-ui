const express = require('../../..');
const app = module.exports = express({
	name: 'bad-assets',
	directory: __dirname
});

module.exports.listen = app.listen(3000);