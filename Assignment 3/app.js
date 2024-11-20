// Define the AngularJS app
angular.module('menuApp', [])
  .controller('MenuSearchController', MenuSearchController)
  .service('MenuSearchService', MenuSearchService);

// Controller that manages the search logic
function MenuSearchController(MenuSearchService) {
  var vm = this;
  vm.searchTerm = '';
  vm.found = [];
  vm.isLoading = false;
  vm.errorMessage = '';

  vm.narrowItDown = function () {
    if (!vm.searchTerm) {
      vm.found = [];
      vm.errorMessage = "";
      return;
    }

    vm.isLoading = true;
    vm.errorMessage = ""; // Reset error message

    MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function (result) {
      if (result.length === 0) {
        vm.errorMessage = "No menu items found that match your search.";
      }
      vm.found = result;
      vm.isLoading = false;
    }, function (error) {
      console.error("Error:", error);
      vm.errorMessage = "An error occurred while fetching data.";
      vm.isLoading = false;
    });
  };

  // Remove item from found list
  vm.removeItem = function (index) {
    vm.found.splice(index, 1);
  };
}

// Service that handles the HTTP request
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
    }).then(function (response) {
      var allItems = response.data;
      var foundItems = [];

      // Convert the object to an array
      var itemsArray = Object.keys(allItems).map(function (key) {
        return allItems[key];
      });

      // Filter items based on search term
      itemsArray.forEach(function (item) {
        if (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
          foundItems.push(item);
        }
      });

      return foundItems;
    }).catch(function (error) {
      console.error("Error in HTTP request:", error);
      throw error;
    });
  };
}
