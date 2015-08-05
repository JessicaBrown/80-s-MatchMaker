"use strict";


app.controller('tvCharCtrl', function ($scope, $routeParams, tvCharService) {
    $scope.tvStars = tvCharService.getData();
});


//******************************************************
//                    Asynchronous                    **
//******************************************************    

//    tvCharService.getData().then(function(data){
//        $scope.oldTvChar = data;    
//            console.log($scope.oldTvChar);
//        $scope.id = $routeParams.id;
//            console.log($scope.id);
//    
//    $scope.user = $scope.oldTvChar[$scope.id];
//    });
