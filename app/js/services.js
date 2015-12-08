'use strict';

/* Services */

angular.module('app.services.basic-service', [])
  .factory('basicService', ['$http', function($http) {

    function doRequest() {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts/1'
      });
    }

    return {
      doRequest: doRequest
    };
  }]);