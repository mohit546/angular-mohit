(function() {
    'use strict';
    angular.module('johnPizza')
        .factory('networkCalls', NetworkCalls);
    NetworkCalls.$inject = ['$http'];

    function NetworkCalls($http) {
        console.log('NetworkCalls loaded !!!');


        var service = {
            getProductListRequest: getProductListRequest,
            getFilterListRequest: getFilterListRequest
        };

        return service;

        function getProductListRequest() {
            return $http.get('/getProductList')
                .then(getProductListRequestComplete)
                .catch(getProductListRequestFailed);

            function getProductListRequestComplete(response) {
                return response.data;
            }

            function getProductListRequestFailed(error) {
                console.log('XHR Failed for getProductList.' + error.data);
            }
        }

        function getFilterListRequest() {
            return $http.get('/getFilterList')
                .then(getFilterListRequestComplete)
                .catch(getFilterListRequestFailed);

            function getFilterListRequestComplete(response) {
                return response.data;
            }

            function getFilterListRequestFailed(error) {
                console.log('XHR Failed for getFilterList.' + error.data);
            }
        }
    }
})();
