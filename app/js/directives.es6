'use strict';

/* Directives */

import { debounce } from 'underscore';

const tpl = `
<span>
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
        }
      };
    }
  ]);
