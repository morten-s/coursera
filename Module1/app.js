/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function (){
 'use strict';
 
 angular.module('myFirstApp', [])
         .controller('MyFirstController', ['$scope', function ($scope){
         $scope.name ="Morten";
 }]);
    
})();