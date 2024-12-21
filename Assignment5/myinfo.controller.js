(function () {
  'use strict';

  angular.module('RestaurantApp')
    .controller('MyInfoController', ['UserService', function (UserService) {
      var myinfoCtrl = this;

      myinfoCtrl.user = UserService.getUser();

      if (!myinfoCtrl.user) {
        myinfoCtrl.notSignedUp = true;
      }
    }]);
})();
