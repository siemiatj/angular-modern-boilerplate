'use strict';

/* Controllers */

angular.module('app.controllers.basic-controller', [])
  .controller('basicController', [
    '$scope',
    'basicService',
    function($scope, basicService) {
      $scope.text = '';

      var basicFunction = function basicServiceRequest() {
        basicService.doRequest()
          .then((resp) => {
            $scope.text = 'Hello World !';
          }, () => {
            $scope.text = 'Error !';
          });
      };

      basicFunction();
    }
  ]);
