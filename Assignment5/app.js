(function () {
  'use strict';

  angular.module('RestaurantApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/signup', {
          templateUrl: 'signup.html',
          controller: 'SignupController as signupCtrl'
        })
        .when('/myinfo', {
          templateUrl: 'myinfo.html',
          controller: 'MyInfoController as myinfoCtrl'
        })
        .otherwise({
          redirectTo: '/signup'
        });
    }]);
})();
