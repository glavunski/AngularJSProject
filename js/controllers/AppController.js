'use strict';

app.controller('AppController',
    function ($scope, authService, notifyService,$location) {
        $scope.authService = authService;

        $scope.logout = function(){
            authService.logout();
            notifyService.showInfo('Successfully logged out');
            $location.path("/");
        }
    }
);
