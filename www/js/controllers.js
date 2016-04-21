angular.module('app.controllers', [])

.controller('page2Ctrl', function($scope) {

})

.controller('page3Ctrl', function($scope) {
    var map = new BMap.Map("ditu"); // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
})

.controller('page4Ctrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
