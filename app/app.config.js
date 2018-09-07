(function () {
    'use strict';
    angular.module('johnPizza')
    .config(Config);

    Config.$inject = ['NotificationProvider'];

    function Config(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    }
})();
