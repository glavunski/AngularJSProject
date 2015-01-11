'use strict';

app.controller('AdminEditUserController',
    function ($scope, $location, authService,
              adminService, notifyService,$routeParams,townsService) {

        checkAdminValidity();
        $scope.towns = townsService.getTowns();
            $scope.getUserById =
                adminService.getUserById($routeParams.id,
                    function success(data){
                        $scope.profile = data;
                    },
                    function error(err){
                        notifyService.showError("Error loading user",err)
                    }
                );

        $scope.editUser = function (username,profile) {
            adminService.editUserProfile(username,profile,
                function success(){
                    notifyService.showInfo("Successfully updated profile");
                    $location.path("/admin/users");
                },
                function error(err){
                    notifyService.showError("Error updating profile",err);
                }
            )
        };


        function checkAdminValidity(){
            if(!authService.isAdmin()){
                $location.path("/");
            }
        }


    }

);
