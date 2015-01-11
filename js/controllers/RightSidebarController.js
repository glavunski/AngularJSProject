'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, categoriesService, townsService) {
        categoriesService.getCategories(
            function success(data){
                $scope.categories = data;
            },
            function error(err){
                notifyService.showError("Error loading categories",err);
            }
        );

        townsService.getTowns(
            function success(data){
                $scope.towns = data;
            },
            function error(err){
                notifyService.showError("Error loading towns",err);
            }
        )


    }
);
