'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {

        $scope.pageSize = pageSize;
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.getNumber = function(num) {
            return new Array(num);
        };

        function reloadAds(){
            adsService.getAds(
                null,
                function(data){
                    $scope.ads = data;
                },
                function(error){
                    notifyService.showError("Error loading data",error);
                }
            )
        }

        reloadAds();

    }
);
