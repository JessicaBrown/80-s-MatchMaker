"use strict"; 


app.controller('toonCharCtrl', function($scope, $routeParams, toonCharService){

    toonCharService.getData().then(function(data){
        $scope.oldToonChar = data;    
            console.log($scope.oldToonChar);
        $scope.id = $routeParams.id;
            console.log($scope.id);
    
    $scope.user = $scope.oldToonChar[$scope.id];
   });
});

//function randomNumber (range) {
//    return Math.round( Math.random() * range );
//}
//return( oldTvChar[ randomNumber(oldTvChar[i] + oldToonChar.length - 1)]);