import 'es6-shim/es6-shim.js';

var context = require.context('./src', true, /\.spec\.js/);
context.keys().forEach(context);