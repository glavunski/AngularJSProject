'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource','angular-loading-bar']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);
app.constant('pagesNum', 8);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/profile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/home.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/user-list.html',
        controller: 'AdminController'
    });

    $routeProvider.when('/admin/users/edit/:id', {
        templateUrl: 'templates/admin/admin-edit-user.html',
        controller: 'AdminEditUserController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});