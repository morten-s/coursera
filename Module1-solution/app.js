/* 
 * MVS
 */
(function (){
 'use strict';
 
 angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);
 
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.LunchCheck = function(){ 
            console.log($scope.dishes);
 
            if(!$scope.dishes){
                $scope.message = "Please enter data";
            }else{
                if($scope.dishes.split(",").length <= 3 ){
                    $scope.message = "ok";
                }else{
                    $scope.message = "Too much";
                
                }
            }
        };
    }
    
 })();