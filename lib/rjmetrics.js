var load = require('load');
var integration = require('integration');
var user;

module.exports = exports = function (analytics) {
	analytics.addIntegration(RJMetrics);
	user = analytics.user();
};

var RJMetrics = exports.Integration = integration('RJMetrics')
  .assumesPageview()
  .readyOnInitialize()
  .global('_rjmq')
  .global('RJM')
  .option('apiKey', '')
  .option('clientId', '');

RJMetrics.prototype.initialize = function() {
	window._rjmq = window._rjmq || [];
};

RJMetrics.prototype.identify = function(id, traits, options) {
	window._rjmq.push(['identify', id, traits, options]);
};

RJMetrics.prototype.load = function() {
	load('https://www.rjmetrics.com/rjm_push.js');
};

RJMetrics.prototype.loaded = function() {
	return !! (window._rjmq);
};

RJMetrics.prototype.track = function(event, properties) {
	window._rjmq.push(['track', event, properties]);
};
