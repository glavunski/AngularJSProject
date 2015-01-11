'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },
            editAd: function (id,adData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },
            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },
            getSingleAd: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders(),
                    id: id
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/Deactivate/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            publishAgainAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/PublishAgain/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getUserProfile : function (success,error){
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/Profile',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editUserProfile : function(params,success,error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/Profile',
                    headers: authService.getAuthHeaders(),
                    data : params
                };
                $http(request).success(success).error(error);
            },
            changeUserPassword : function(params,success,error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ChangePassword',
                    headers: authService.getAuthHeaders(),
                    data : params
                };
                $http(request).success(success).error(error);
            }

        }
    }
);
