'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize, pagesNum) {

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        function reloadAds(){
            adsService.getAds(
                $scope.adsParams,
                function(data){
                    $scope.ads = data;
                    calculatePages();
                },
                function(error){
                    notifyService.showError("Error loading data",error);
                }
            )
        }

        function calculatePages(){
            var allPages = Math.round($scope.ads.numItems / 2);
            $scope.allPages = allPages;
            var pagesArray = [];
            var maxPage = $scope.adsParams.startPage + pagesNum - 1;
            for(var i = $scope.adsParams.startPage; i <= maxPage ; i++){
                if(i > allPages){
                    break;
                }
                pagesArray.push(i);
            }
            $scope.pagesArray = pagesArray;
        }

        $scope.loadPage = function loadPage(page){
            if(page > 0 && page < $scope.allPages + 1){
                $scope.adsParams.startPage = page;
                reloadAds();
            }
        };

        reloadAds();

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            reloadAds();
        });



    }
);
