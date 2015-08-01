
var app = angular.module('matchMaker');

app.service('homeService', function($http, $q, toonCharService, tvCharService){
  this.getAllData = function(){
    var deferred = $q.defer();
    var matchData = {};
    toonCharService.getMatchData('oldToonChar')
      .then(function(data){
        matchData['oldToonData'] = data;
        tvCharService.getMatchData('oldTvChar')
          .then(function(data){
            matchData['oldTvChar'] = data;
                deferred.resolve(matchData);
              })
          })
      })
    return deferred.promise;
  }
});