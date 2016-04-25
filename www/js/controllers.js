angular.module('app.controllers', [])

.controller('orderCtrl', function($scope) {

})

.controller('locationCtrl', function($scope, $window) {
    var map = new BMap.Map("ditu"); // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

    // var marker = new BMap.Marker(point); // 创建标注    
    // map.addOverlay(marker); // 将标注添加到地图中

    var zoomControl = new BMap.ZoomControl();
    map.addControl(zoomControl); //添加缩放控件  
    var scaleControl = new BMap.ScaleControl({ offset: new BMap.Size(80, 5) });
    map.addControl(scaleControl); //添加比例尺控件  

    var opts = {
        width: 100, // 信息窗口宽度      
        height: 50, // 信息窗口高度      
        title: "Hello" // 信息窗口标题     
    }
    var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象      
    // map.openInfoWindow(infoWindow, marker.getPosition()); // 打开信息窗口



    var hotelMark = new MessageOverlay(map.getCenter(),  "#00abc4", 'img/marker.png' ,'189');
    hotelMark.addEventListener('click', function(e){
      console.log(e);
    });

    map.addOverlay(hotelMark);

    function addMarker(point, index) { // 创建图标对象     
        var myIcon = new BMap.Icon("img/markers.png",
            new BMap.Size(114, 123), {
                // 指定定位位置。     
                // 当标注显示在地图上时，其所指向的地理位置距离图标左上      
                // 角各偏移7像素和25像素。您可以看到在本例中该位置即是     
                // 图标中央下端的尖角位置。      
                anchor: new BMap.Size(7, 25),
            });
        // 创建标注对象并添加到地图     
        var marker = new MessageOverlay(point,  "#00abc4", 'img/marker.png' , Math.floor(Math.random()*100+100));
        map.addOverlay(marker);

        marker.addEventListener("click", function(e) {
            alert("您点击了标注");
            $window.location.href = 'http://www.baidu.com';
        });
    }
    // 随机向地图添加10个标注      
    var bounds = map.getBounds();
    var lngSpan = bounds.getNorthEast().lng - bounds.getSouthWest().lng;
    var latSpan = bounds.getNorthEast().lat - bounds.getSouthWest().lat;
    for (var i = 0; i < 10; i++) {
        var point = new BMap.Point(bounds.getSouthWest().lng + lngSpan * (Math.random() * 0.7 + 0.15), bounds.getSouthWest().lat + latSpan * (Math.random() * 0.7 + 0.15));
        // addMarker(point, i);
    }

})

.controller('profileCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
