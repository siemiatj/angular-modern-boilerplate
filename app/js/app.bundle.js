'use strict';

/* App Bundle */
var angularAnimate = require('../../node_modules/angular-animate');
var angularMaterial = require('../../node_modules/angular-material');

require('angular-material/angular-material.css');
require('angular-material/layouts/angular-material.layout-attributes.scss');
require('font-awesome/css/font-awesome.css');

require('../../node_modules/angular-material/');
require('./services');
require('./controllers.es6');
require('./directives.es6');

angular.module('app', [
  angularAnimate,
  angularMaterial,
  'app.services',
  'app.controllers',
  'app.directives'
]);

angular.module('app.controllers', [
  'app.controllers.basic-controller'
]);

angular.module('app.directives', [
  'app.directives.basic-directive'
]);

angular.module('app.services', [
  'app.services.basic-service'
]);
