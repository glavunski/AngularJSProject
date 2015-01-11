'use strict';

app.controller('UserAdsController',
    function ($scope, userService, notifyService,pageSize,pagesNum) {

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.getAllUserAds = function(){
            userService.getUserAds(
                $scope.adsParams,
            function success(data){
                $scope.data = data;
                $scope.ads = data.ads;
                calculatePages();
            },
             function error(err){
                 notifyService.showError("Error loading user ads",err);
             }
            )

        };
       $scope.getAllUserAds(null);


        function calculatePages(){
            var allPages = Math.round($scope.data.numItems / 2);
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
               $scope.getAllUserAds();
            }
        };


    }

);
