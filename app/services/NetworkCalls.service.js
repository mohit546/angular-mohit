(function () {
    'use strict';
    angular.module('johnPizza')
        .factory('networkCalls', NetworkCalls);
    NetworkCalls.$inject = ['$http'];
    function NetworkCalls($http) {
        console.log('NetworkCalls loaded !!!');


        var service = {
            getNewsHeadlines: getNewsHeadlines
        };

        return service;

        function getNewsHeadlines() {
            return $http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + apiKey)
                .then(getNewsHeadlinesComplete)
                .catch(getNewsHeadlinesFailed);

            function getNewsHeadlinesComplete(response) {
                return response.data;
            }

            function getNewsHeadlinesFailed(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();
