'use strict';

app.controller('AdminController',
    function ($scope, $location, authService,
              adminService, notifyService) {

        checkAdminValidity();

        $scope.userParams = {
            SortBy : "UserName"
        };

      adminService.getAllUsers($scope.userParams,
            function success(data){
                $scope.users = data.users;
            },
            function error(err){
                notifyService.showError("Error loading users",err);
            });


       $scope.loadUser = function(id){
            $location.path("/admin/users/edit/"+id);
        };


        function checkAdminValidity(){
            if(!authService.isAdmin()){
                $location.path("/");
            }
        }


    }

);
