'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
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
        );

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

    }
);
