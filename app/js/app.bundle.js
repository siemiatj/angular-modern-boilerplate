/* App Bundle */
require('../../node_modules/angular-material');
require('./services');
require('./controllers.es6');
require('./directives.es6');

require('../scss/app.scss');

angular.module('app', [
  'ngMaterial',
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
