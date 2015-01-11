'use strict';

app.controller('UserProfileController',
    function ($scope, $location, userService ,townsService, notifyService) {

        $scope.towns = townsService.getTowns();

        $scope.getUserProfile = function () {
            userService.getUserProfile(
                function success(data) {
                    $scope.profile = data;
                },
                function error(err) {
                    notifyService.showError("Error loading user profile", err);
                }
            )
        };

        $scope.getUserProfile();

        $scope.editUser = function (profile) {
            userService.editUserProfile(profile,
                function success(){
                    notifyService.showInfo("Successfully updated profile");
                    $location.path("/user/profile");
                },
                function error(err){
                    notifyService.showError("Error updating profile",err);
                }
            )
        };

        $scope.changePassword = function (profile) {
            userService.changeUserPassword(profile,
                function success(){
                    notifyService.showInfo("Successfully changed password");
                    $location.path("/user/profile");
                },
                function error(err){
                    notifyService.showError("Error changing password",err);
                }
            )
        };

    }
);
