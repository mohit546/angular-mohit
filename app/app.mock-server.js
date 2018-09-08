(function() {
    'use strict';
    angular.module('johnPizza')
        .run(MockServer);
    MockServer.$inject = ['$httpBackend', 'backendData'];

    function MockServer($httpBackend, backendData) {

        $httpBackend.whenGET('/getProductList').respond(function(method, url, data) {
            var getProductList = backendData.findAll();
            return [200, getProductList, {}];
        });

        $httpBackend.whenGET('/getFilterList').respond(function(method, url, data) {
            var getFilterLists = backendData.sendAllFilterList();
            return [200, getFilterLists, {}];
        });

        $httpBackend.whenGET(/^.\/app\//).passThrough(); // Requests for templates are handled by the real server
        //...
    };
})();
