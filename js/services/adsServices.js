'use strict';

app.factory('adsService',
    function ($resource, baseServiceUrl,authService) {
        var resource = $resource(
            baseServiceUrl + '/api/ads/:id',
            {id : '@id'},
            {getAll : {method:'GET'}
            }
        );
        var userResource = $resource(
            baseServiceUrl +'/api/user/ads/:id',
            {
                id: '@id'
            }, {
                update: {
                    method: 'PUT'
                }
            });

        return {
                getAds: function(params, success, error) {
                    return resource.getAll(params, success, error);
                },
                getSingle: function(id) {
                    return userResource.get({
                        id: id
                    });
            }
            }
        }

);

app.factory('townsService',
    function ($resource, baseServiceUrl) {
        var resource = $resource(
            baseServiceUrl + '/api/towns',
            null,
            {getAll : {method:'GET'}}
        );

        return {
            getTowns: function(success, error) {
                return resource.query(success, error);
            }
        };
    }
);

app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var resource = $resource(
            baseServiceUrl + '/api/categories',
            null,
            {getAll : {method:'GET'}}
        );

        return {
            getCategories: function(success, error) {
                return resource.query(success, error);
            }
        };
    }
);
