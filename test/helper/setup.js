// we need to read jsx so we need babel, This done via .babelrc file which loads the transforms reqd
// once .babelrc is used then no need to duplicate this in webpack.config.js can can remove query key
//from there
require('babel-register')
// require('babel-polyfill')

//jsdom requires that npm package , react-addons-test-utils is present
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator