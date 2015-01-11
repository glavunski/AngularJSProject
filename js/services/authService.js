'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                // TODO
            },

            register: function(userData, success, error) {
                // TODO
            },

            logout: function() {
                delete sessionStorage['currentUser'];
                location.redirectTo('/');
            },

            getCurrentUser : function() {
                return sessionStorage['currentUser'];
            },

            isAnonymous : function() {
                return sessionStorage['currentUser'] == null;
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] != null;
            },

            isNormalUser : function() {

            },

            isAdmin : function() {
                // TODO
            },

            getAuthHeaders : function() {
                // TODO
            }
        }
    }
);
