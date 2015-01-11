'use strict';

app.controller('AdminController',
    function ($scope, $location, authService,
              adminService, notifyService,$routeParams) {
        checkAdminValidity();
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        userService.getSingleAd($routeParams.id,
            function success(data){
                $scope.adData = data;
                $scope.adData.ChangeImage = false;
            },function error(err){
                notifyService.showError("Unable to load ad data",err);
            }
        );


        function checkAdminValidity(){
            if(!authService.isAdmin()){
                $location.path("/");
            }
        }


    }

);
