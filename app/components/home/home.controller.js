(function () {
    'use strict';
    angular.module('johnPizza')
        .controller('homeController', HomeController);
    HomeController.$inject = ['$scope', 'networkCalls'];
    function HomeController($scope, networkCalls) {
        console.log('HomeController loaded !!!');

        var vm = this;
        vm.$onInit = onInit;

        function onInit() {}

    }
})();
