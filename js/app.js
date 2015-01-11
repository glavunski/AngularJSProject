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

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});