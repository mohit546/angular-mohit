(function() {
    'use strict';
    angular.module('johnPizza')
        .service('backendData', BackendData);

    function BackendData() {
        this.data = [{
                title: 'Pepperoni Pizza',
                base: 'Cheese-Stuffed Crust',
                type: 'Pepperoni',
                price: 100,
                veg: true
            },
            {
                title: 'Sausage Pizza',
                base: 'Pizza Bagels',
                type: 'Sausage',
                price: 200,
                veg: false
            },
            {
                title: 'Garlic Pizza',
                base: 'Flatbread',
                type: 'Garlic',
                price: 300,
                veg: true
            },
            {
                title: 'Olives Pizza',
                base: 'Thin Crust',
                type: 'Olives',
                price: 400,
                veg: true
            },
            {
                title: 'Mushrooms Pizza',
                base: 'Sicilian Style',
                type: 'Mushrooms',
                price: 500,
                veg: true
            },
            {
                title: 'Onions Pizza',
                base: 'Chicago Deep Dish',
                type: 'Onions',
                price: 600,
                veg: true
            },
            {
                title: 'Chicken Pizza',
                base: 'Neapolitan Crust',
                type: 'Chicken',
                price: 100,
                veg: false
            },
            {
                title: 'Oregano Pizza',
                base: 'Thin Crust',
                type: 'Oregano',
                price: 200,
                veg: false
            }
        ];

        this.filterType = [
            'Pepperoni',
            'Sausage',
            'Garlic',
            'Olives',
            'Mushrooms',
            'Onions',
            'Chicken',
            'Oregano'
        ];

        this.filterBase = [
            'Cheese-Stuffed Crust',
            'Pizza Bagels',
            'Flatbread',
            'Thin Crust',
            'Sicilian Style',
            'Chicago Deep Dish',
            'Neapolitan Crust',
            'Thin Crust',
        ];

        this.getData = function() {
            return this.data;
        };

        this.setData = function(data) {
            this.data = data;
        };

        this.findAll = function() {
            return this.getData();
        };

        this.sendAllFilterList = function() {
            return { typeList: this.filterType, baseList: this.filterBase }
        };
    }

})();
