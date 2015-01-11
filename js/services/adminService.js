'use strict';

app.factory('adminService',
    function ($http, baseServiceUrl, authService) {
        return {
            getAllUsers: function (filter, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Users/',
                    headers: authService.getAuthHeaders(),
                    data: filter
                };
                $http(request).success(success).error(error);
            },
            getUserById : function(id,success,error){
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Users/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserProfile : function(username,data,success,error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/User/' + username,
                    headers: authService.getAuthHeaders(),
                    data : data
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
