"use strict";
var app = angular.module('matchMaker', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'template/home.html',
            controller: 'homeCtrl'
        })
        .when('/ChooseTvChar', {
            templateUrl: 'template/oldTvChar.html',
            controller: 'tvCharCtrl'
        })
        .when('/Characters/:Character', {
            templateUrl: 'template/loveConnection.html',
            controller: 'loveConnectionCtrl',
            //resolve runs a function before you are routed to the view
            resolve: {
                connection: function ($route, tvCharService) {
                    return tvCharService.getConnectionChar($route.current.params.Character);
                }
            }
        })
        .otherwise({
            redirectTo: '/home'
        })
});

