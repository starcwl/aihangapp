angular.module('app.controllers', [])

.controller('orderCtrl', function($scope) {

})

.controller('locationCtrl', function($scope, $window) {
    var map = new BMap.Map("ditu"); // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

    var marker = new BMap.Marker(point); // 创建标注    
    map.addOverlay(marker); // 将标注添加到地图中

    function addMarker(point, index) { // 创建图标对象   
        var myIcon = new BMap.Icon("img/markers.png", new BMap.Size(50, 50), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            // offset: new BMap.Size(10, 25),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            // imageOffset: new BMap.Size(20,-30) // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point, { icon: myIcon });
        marker.enableDragging();

        marker.addEventListener("click", function(e) {
           alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
            // $window.location.href = '//baidu.com';

        });

        map.addOverlay(marker);
    }
    // 随机向地图添加10个标注    
    var bounds = map.getBounds();
    bounds.minX = bounds.getSouthWest().lng;
    bounds.maxX = bounds.getNorthEast().lng;
    bounds.minY = bounds.getSouthWest().lat;
    bounds.maxY = bounds.getNorthEast().lat;
    var lngSpan = bounds.maxX - bounds.minX;
    var latSpan = bounds.maxY - bounds.minY;
    for (var i = 0; i < 10; i++) {
        var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),
            bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));
        addMarker(point, i);
    }


    var opts = {
        width: 250, // 信息窗口宽度    
        height: 100, // 信息窗口高度    
        title: "Hello" // 信息窗口标题   
    }
    var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象    
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口

})

.controller('profileCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
