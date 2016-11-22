String.prototype.ucfirst = require('./lib/helpers/ucfirst');
Array.prototype.diff = require('./lib/helpers/array-diff');

//register partial directive globally
Vue.directive('partial', require('./lib/directives/partial'));

exports.client = require('./lib/v-client-table');
exports.server = require('./lib/v-server-table');
