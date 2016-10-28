(function () {

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','RegistrationService'];
function MyinfoController(MenuService, RegistrationService) {
  var info = this;
  info.user = RegistrationService.getUser();
  if(info.user){
    var promise = MenuService.getMenuItem(info.user.short_name);
    promise.then(function (response) {
      info.item = response;
    });
  }
};

})();
