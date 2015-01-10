'use strict';

app.factory('adsService',
    function ($resource, baseServiceUrl) {
        var resource = $resource(
            baseServiceUrl + '/api/ads/',
            null,
            {getAll : {method:'GET'}}
        );

        return {
            getAds: function(params, success, error) {
                return resource.getAll(params, success, error);
            }
        };
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
