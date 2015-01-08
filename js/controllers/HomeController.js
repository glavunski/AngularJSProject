'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        function reloadAds(){
            adsService.getAds(
                null,
                function(data){
                    $scope.ads = data;
                },
                function(error){
                    //will fix later
                    alert('error');
                }
            )
        }

        reloadAds();
    }
);
