angular.module('app.controllers', [])

.controller('orderCtrl', function($scope) {

})

.controller('locationCtrl', function($scope, $window) {
    var map = new BMap.Map("ditu"); // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

    var marker = new BMap.Marker(point); // 创建标注    
    map.addOverlay(marker); // 将标注添加到地图中

    var zoomControl = new BMap.ZoomControl();
    map.addControl(zoomControl); //添加缩放控件  

    var scaleControl = new BMap.ScaleControl({ offset: new BMap.Size(80, 5) });
    map.addControl(scaleControl); //添加比例尺控件  


    var options = {
        center: point,
        bgColor: '#00abc4',
        logo: 'img/marker.png',
        price: '189',
        info: 'hello'
    };

    var hotelMark = new HotelMarkOverlay(options);
    map.addOverlay(hotelMark);
    hotelMark.addEventListener('click', function(e) {
        console.log(e);
    });


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
        });
    }
    // 随机向地图添加10个标注      
    var bounds = map.getBounds();
    var lngSpan = bounds.getNorthEast().lng - bounds.getSouthWest().lng;
    var latSpan = bounds.getNorthEast().lat - bounds.getSouthWest().lat;
    for (var i = 0; i < 10; i++) {
        var point = new BMap.Point(bounds.getSouthWest().lng + lngSpan * (Math.random() * 0.7 + 0.15), bounds.getSouthWest().lat + latSpan * (Math.random() * 0.7 + 0.15));
        addMarker(point, i);
    }
    map.addEventListener('zoomend', function(e) {
        map.clearOverlays();

        for (var i = 0; i < 3; i++) {
            var point = new BMap.Point(bounds.getSouthWest().lng + lngSpan * (Math.random() * 0.7 + 0.15), bounds.getSouthWest().lat + latSpan * (Math.random() * 0.7 + 0.15));
            addMarker(point, i);
        }
    });

})

.controller('profileCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
