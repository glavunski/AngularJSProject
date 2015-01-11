'use strict';

// The HomeController holds the presentation logic for the home screen
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
            var pagesArray = [];
            var maxPage = $scope.adsParams.startPage + pagesNum - 1;
            for(var i = $scope.adsParams.startPage; i <= maxPage ; i++){
                if(i > allPages){
                    break;
                }
                pagesArray.push(i);
            }
            $scope.numPages = pagesArray;
        }

        $scope.loadPage = function loadPage(page){
            $scope.adsParams.startPage = page;
            reloadAds();
        };

        reloadAds();

    }
);
