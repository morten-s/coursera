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
            //check if dishes is not defined as in empty
            if(!$scope.dishes){
                $scope.message = "Please enter data";
            }else{
                //test if there are more than 3 items
                if($scope.dishes.split(",").length <= 3 ){
                    $scope.message = "Enjoy!";
                }else{
                    $scope.message = "Too much";
                
                }
            }
        };
    }
    
 })();