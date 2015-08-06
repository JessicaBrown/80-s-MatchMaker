"use strict";


app.controller('loveConnectionCtrl', function ($scope, $routeParams, toonCharService, connection) {
    $scope.tvStar = connection; 
    console.log(connection);
    $scope.toon = toonCharService.getToon();
    console.log($routeParams.character);
    
});

