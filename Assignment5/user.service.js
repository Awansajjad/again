(function () {
  'use strict';

  angular.module('RestaurantApp')
    .service('UserService', function () {
      var service = this;

      var user = null;
      var favoriteDish = null;

      service.saveUser = function (userInfo, dishInfo) {
        user = userInfo;
        favoriteDish = dishInfo;
      };

      service.getUser = function () {
        if (user && favoriteDish) {
          user.favoriteDish = favoriteDish;
        }
        return user;
      };
    });
})();
