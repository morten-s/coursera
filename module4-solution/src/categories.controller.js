(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var mainlist = this;
  mainlist.items = items.data;
  console.log("hi",items);
}

})();
