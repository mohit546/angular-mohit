(function() {
    'use strict';
    angular.module('johnPizza')
        .controller('homeController', HomeController);
    HomeController.$inject = ['$scope', 'networkCalls'];

    function HomeController($scope, networkCalls) {
        console.log('HomeController loaded !!!');

        var vm = this;
        vm.$onInit = onInit;
        vm.filters = {
            veg: '',
            slider: {
                value: 100,
                options: {
                    floor: 100,
                    ceil: 600
                },
            },
            pizzaBase: null,
            pizzaType: null
        };
        vm.productList = [];
        vm.filterList = {};

        vm.rangeFilter = function(product) {
            return product.price <= vm.filters.slider.value;
        };

        vm.clearFilter = function() {
            vm.filters = {
                veg: '',
                slider: {
                    value: 100,
                    options: {
                        floor: 100,
                        ceil: 600
                    },
                },
                pizzaBase: null,
                pizzaType: null
            };
        };

        function onInit() {
            getProductList();
            getFilterList();
        }

        function getFilterList() {
            networkCalls.getFilterListRequest().then(function(response) {
                console.log(response);
                vm.filterList = response;
            });
        }

        function getProductList() {
            networkCalls.getProductListRequest().then(function(response) {
                console.log(response);
                vm.productList = response;
            });
        }

    }
})();
