'use strict';

app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("Registration successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError('Error registering',err);
                }
            );
        };
    }
);
