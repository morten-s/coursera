/*
 * MVS
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController', AlreadyBoughtController)
            .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {

        this.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        this.boughtItem = function (itemIndex) {
            ShoppingListCheckOffService.boughtItem(itemIndex);
        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.itemsBought = ShoppingListCheckOffService.getItemsBought();
//        this.removeItem = function (itemIndex) {
//            ShoppingListCheckOffService.removeItem(itemIndex);
//        };
    }


    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = [{name: "Cookies", quantity: 5}, {name: "Super Cookies", quantity: 15}, {name: "Extreme Cookies", quantity: 5}];
        var itemsBought = [];
        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.boughtItem = function (itemIndex) {
            //copy item to bought list and remove item from to buy list
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };
        service.getItemsBought = function () {
            return itemsBought;
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
    }

})();
