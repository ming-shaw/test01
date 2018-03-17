/**
 * Created by SHAW on 2018/3/17.
 */
// 自定义tabbar组件
angular.module("app").directive("tabbar",function () {
    return{
        restrict:"EA",
        templateUrl:"../views/tabbar_tpl.html",
        controller:["$scope",function ($scope) {
            $scope.tabChange=function (id) {
                $scope.$emit("tab-tabChangeNotif",{tabID:id});
                // alert(tab);
            }
        }]
    }
})