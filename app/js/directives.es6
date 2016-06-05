/* Directives */
/*eslint no-console: ["error", { allow: ["log"] }] */

import { reduce } from 'underscore';

const tpl = `
<span class="basic">
{{ variable }}
</span>`;

angular.module('app.directives.basic-directive', [])
  .directive('basicDirective', [
    function () {
      return {
        restrict: 'E',
        template: tpl,
        scope: {
          variable: '@'
        },
        link: function (scope) {
          scope.foo = reduce([1, 2, 3], (memo, num) => { 
            return memo + num; 
          }, 0);

          console.log('FOO: ', scope.foo);
        }
      };
    }
  ]);
