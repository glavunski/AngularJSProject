'use strict';

app.controller('UserEditAdController',
    function ($scope, $location, townsService, categoriesService,
              userService, notifyService,$routeParams) {

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

        $scope.editAd = function(adData) {
            userService.editAd($routeParams.id,adData,
                function success() {
                    notifyService.showInfo('Successfully updated ad');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Error publishing ad',err)
                }
            );
        };

        $scope.deleteAd = function() {
            userService.deleteAd($routeParams.id,
                function success() {
                    notifyService.showInfo('Successfully deleted ad');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Error deleting ad',err)
                }
            );
        };

        $scope.publishAdAgain = function() {
            userService.publishAgainAd($routeParams.id,
                function success() {
                    notifyService.showInfo('Successfully published ad');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Error publishing ad',err)
                }
            );
        };

        $scope.deactivateAd = function() {
            userService.deactivateAd($routeParams.id,
                function success() {
                    notifyService.showInfo('Successfully deactivated ad');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Error deactivating ad',err)
                }
            );
        };

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    console.log($scope.adData.imageDataUrl);
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    }

);
