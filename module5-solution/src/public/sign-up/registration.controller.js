(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService', 'RegistrationService'];
function RegistrationController(MenuService, RegistrationService) {
  var reg = this;
  reg.submit = function (regForm) {
    var promise = MenuService.getMenuItem(reg.user.short_name);
    promise.then(function (response) {
      console.log(response);
          reg.completed = true;
          regForm.short_name.$setValidity('required', true);
          RegistrationService.setUser(reg.user);
    })
    .catch(function (error) {
      console.log("error",error);
          reg.completed = false;
          regForm.short_name.$setValidity('required', false);
    });
    console.log("getuser",RegistrationService.getUser());
  };

}

})();
