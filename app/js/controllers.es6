'use strict';

/* Controllers */

import { object } from 'underscore';

class BasicController {
  constructor(...services) {
    Object.assign(this, object(this.constructor.$inject, services));

    this.$scope.text = '';

    this._basicFunction();
  }

  _basicFunction() {
    const { $scope, basicService } = this;

    basicService.doRequest()
      .then((resp) => {
        $scope.text = 'Hello World !';
      }, () => {
        $scope.text = 'Error !';
      });
  }
};

BasicController.$inject = [
  '$scope',
  'basicService'
];

angular.module('app.controllers.basic-controller', [])
  .controller('basicController', BasicController);
