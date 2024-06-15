// app.js

(function() {
  'use strict';

  angular.module('LunchCheckerApp', [])
    .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkLunch = function() {
      if (!$scope.lunchMenu.trim()) {
        $scope.message = "Please enter data first";
      } else {
        var items = $scope.lunchMenu.split(',').filter(function(item) {
          return item.trim() !== '';
        });

        if (items.length === 0) {
          $scope.message = "Please enter data first";
        } else if (items.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  }

})();
