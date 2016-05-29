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
      .then(() => {
        $scope.text = 'Hello World !';
      }, () => {
        $scope.text = 'Error !';
      });
  }

  click() {
    console.log('CLICK !');
  }
};

BasicController.$inject = [
  '$scope',
  'basicService'
];

angular.module('app.controllers.basic-controller', [])
  .controller('basicController', BasicController);
