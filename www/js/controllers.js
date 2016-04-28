angular.module('app.controllers', [])

.controller('orderCtrl', function($scope) {

})

.controller('locationCtrl', function($scope, $window, $http, GeoService, $state) {

    var map = new BMap.Map("ditu"); // 创建地图实例  
    var selfPoint = new BMap.Point(116.404, 39.915); // 初始化点坐标在首都  
    map.centerAndZoom(selfPoint, 15); // 初始化地图，设置中心点坐标和地图级别
    var selfMarker = new BMap.Marker(selfPoint);

    // 随机向地图添加10个标注      
    var createRandomHotels = function() {
        var bounds = map.getBounds();
        var lngSpan = bounds.getNorthEast().lng - bounds.getSouthWest().lng;
        var latSpan = bounds.getNorthEast().lat - bounds.getSouthWest().lat;
        for (var i = 0; i < 10; i++) {
            var point = new BMap.Point(bounds.getSouthWest().lng + lngSpan * (Math.random() * 0.7 + 0.15), bounds.getSouthWest().lat + latSpan * (Math.random() * 0.7 + 0.15));
            addMarker(point, i);
        }
    }

    // 首次选址
    navigator.geolocation.getCurrentPosition(
        function(position) {
            GeoService.ConvertGeo({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
            }, function(success, response) {
                if (success) {
                    selfPoint = new BMap.Point(response.longitude, response.latitude);
                    map.centerAndZoom(selfPoint, 15); // 初始化地图，设置中心点坐标和地图级别
                    map.removeOverlay(selfMarker);
                    selfMarker = new BMap.Marker(selfPoint); // 创建标注    
                    map.addOverlay(selfMarker); // 将标注添加到地图中
                    createRandomHotels();
                    console.log('response is :', response);
                }
            });
        },
        // Optional settings below
        function(error) {

            console.log('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }, {
            timeout: 1000,
            enableHighAccuracy: true,
            maximumAge: Infinity
        }
    );


    var zoomControl = new BMap.ZoomControl();
    map.addControl(zoomControl); //添加缩放控件  

    var scaleControl = new BMap.ScaleControl({ offset: new BMap.Size(80, 5) });
    map.addControl(scaleControl); //添加比例尺控件  



    function addMarker(point, index) { // 创建图标对象     

        var options = {
            center: point,
            bgColor: '#00abc4',
            logo: 'img/marker.png',
            price: Math.floor(Math.random() * 100 + 100),
            info: 'world'
        };
        // 创建标注对象并添加到地图     
        var marker = new HotelMarkOverlay(options);
        map.addOverlay(marker);

        marker.addEventListener("click", function(e) {
            alert("您点击了标注");
            // $window.location.href = 'http://www.baidu.com';
            $state.go('hotel')
        });
    }



    //zoomEnd event
    map.addEventListener('zoomend', function(e) {
        map.clearOverlays();
        var bounds = map.getBounds();
        var lngSpan = bounds.getNorthEast().lng - bounds.getSouthWest().lng;
        var latSpan = bounds.getNorthEast().lat - bounds.getSouthWest().lat;
        for (var i = 0; i < 3; i++) {
            var point = new BMap.Point(bounds.getSouthWest().lng + lngSpan * (Math.random() * 0.7 + 0.15), bounds.getSouthWest().lat + latSpan * (Math.random() * 0.7 + 0.15));
            addMarker(point, i);
        }
        selfMarker = new BMap.Marker(selfPoint); // 创建标注    
        map.addOverlay(selfMarker); // 将标注添加到地图中
    });



    function onSuccess(position) {

        GeoService.ConvertGeo({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
        }, function(success, response) {
            if (success) {
                selfPoint = new BMap.Point(response.longitude, response.latitude);
                map.removeOverlay(selfMarker);
                selfMarker = new BMap.Marker(selfPoint); // 创建标注    
                map.addOverlay(selfMarker); // 将标注添加到地图中
                console.log('response is :', response);
            }
        })
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 3000 });

})

.controller('hotelCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
