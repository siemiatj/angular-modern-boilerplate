'use strict';

/* Directives */

angular.module('app.directives.basic-directive', [])
  .directive('basicDirective', [
    function () {
      return {
        restrict: 'E',
        template: '<span>{{ variable }}</span>',
        scope: {
          variable: '@'
        },
        link: function (scope) {
        }
      };
    }
  ]);
