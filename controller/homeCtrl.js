var app = angular.module('matchMaker');

app.controller('homeCtrl', function($scope, homeService, allData){
  $scope.matchData = allData['oldTvChar' + 'oldToonChar'];
});