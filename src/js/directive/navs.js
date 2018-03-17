/**
 * Created by SHAW on 2018/3/17.
 */
// 自定义导航组件
angular.module("app").directive("navs",function () {
    return{
        restrict:"EAMC",
        templateUrl:"../views/nav_tpl.html",
        controller:["$scope","$location","$window", function ($scope,$location) {
            // $scope.hasReturn = false;
            // $scope.index = 0;
            $scope.curTitle = "首页";
            $scope.$on("app-tabChangeNotif",function (e,res) {
                $scope.curTitle = res;
            })
            // console.log($location.url());
        }],
        // scope:true
    }
})