angular.module('app.services', [])
.constant('baseURL','http://localhost:6001/')
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

}])
.service('hotelService', ['$resource', 'baseURL', function($resource, baseURL){
    this.getAllHotels = function(){
        return $resource(baseURL + 'hotels/search').query();
    };

    this.getHotelById = function(id){
        return $resource(baseURL + 'hotels/:id', {id:'@id'}).get({id:id});
    }

    this.getRandomHotel =function(){
        return $resource(baseURL + 'hotels/random').get();
    }

    this.bookHotel = function(roomId, hotelId){
        return $resource(baseURL + 'orders/:hotelId/:roomId', {hotelId:hotelId, roomId: roomId}).save();
    };

}])

.service('orderService', ['$resource', 'baseURL', function($resource, baseURL){
    this.myOrders = function(){
        return $resource(baseURL + 'orders').query();
    }
}])
;
