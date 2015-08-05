"use strict";


app.controller('loveConnectionCtrl', function ($scope, $routeParams, toonCharService, connection) {
    $scope.tvStar = connection; 
    console.log(connection);
    $scope.toon = toonCharService.getToon();
    console.log($routeParams.character);
    
});


//    $scope.tvStar = tvStar;
//    $scope.id = $routeParams.id;
//    $scope.tvStar = $scope.oldTvChar[$scope.id]; 
//*******************************************************

//    toonCharService.getData().then(function(data){
//        $scope.oldToonChar = data;    
//            console.log($scope.oldToonChar);
//        $scope.id = $routeParams.id;
//            console.log($scope.id);
//    
//    $scope.user2 = $scope.oldToonChar[$scope.id];
//   });

//    $scope.tvStar = tvCharService.getData(); //pass as a parameter on the route