(function () {
    'use strict';
    angular.module('johnPizza')
    .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function Config($stateProvider, $urlRouterProvider, NotificationProvider, $httpProvider) {
        console.log('NewsApp Config loaded !!!');

        // $httpProvider.interceptors.push('HttpRequestInterceptor');
        $stateProvider.

            state('home', {
                name: 'home',
                url: '/home',
                templateUrl: './app/components/home/home.view.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            });

        $urlRouterProvider.otherwise('/home');
    }
})();
