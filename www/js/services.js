angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('GeoService', ['$http', function($http) {
    this.ConvertGeo = function(coords, cb) {
        $http.get('http://localhost:6001/geoconv', {
            params: {
                coords: coords.longitude + ',' + coords.latitude,
            }
        }).then(function(response) {
            cb(true, {
              longitude:response.data.result[0].x,
              latitude:response.data.result[0].y,
            });
        }, function(error) {
            cb(false, error);
        });

    }

}]);
