(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function foundItemsDirectiveController() {
  var list = this;
console.log("dirctrl");
/*  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };*/
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
/*
  var promise = MenuSearchService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
*/
  menu.getMatchedMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.menuItems = response;
      console.log("NarrowitemsList: " + menu.menuItems.length);
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  menu.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    menu.menuItems.splice(itemIndex,1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
/*
  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };
*/
  service.getMatchedMenuItems = function (searchTerm) {

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        description: searchTerm
      }
    }).then(function (result) {
      console.log(result);
      var menuItems = result.data.menu_items;
      var foundItems = [];
      for (var i = 0; i < menuItems.length; i++) {
        var description = menuItems[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menuItems[i]);
          console.log("des " + description + "  searchTerm " + searchTerm);
        }
      }
      return foundItems;
    });

    return response;
  };

}

})();
