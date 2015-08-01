"use strict"; 
var app = angular.module('matchMaker', ['ngRoute']);
    
    app.config(function ($routeProvider) {
            $routeProvider
            .when('/home', {
                        templateUrl: 'template/home.html',
                        controller: 'homeCtrl',
                  })
            .when('/tvChar/:id', {
                        templateUrl: 'template/oldTvChar.html',
                        controller: 'tvCharCtrl',
                  })
            .when('/oldToonChar/:id', {
                        templateUrl: 'template/oldToonChar.html',
                        controller: 'toonCharCtrl',
                           })
            .otherwise({
                        redirectTo: '/home'
                  })
      });

