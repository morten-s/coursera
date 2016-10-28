(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);


RegistrationService.$inject = [];
function RegistrationService() {
  var service = this;

  service.setUser = function (user) {
    return service.user = user;
  };
  service.getUser = function () {
    return service.user;
  };

}})();
