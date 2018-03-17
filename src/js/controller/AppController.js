/**
 * Created by SHAW on 2018/3/17.
 */
// 总控制器
angular.module("app").controller("appController",["$scope","$window","$location", function ($scope,$window,$location) {
    $scope.appTitle = "每日一课";
    $scope.titleArr=["首页","内容","作者","我的"];
    $scope.index = 0;
    $scope.$on("tab-tabChangeNotif",function (e,res) {
        // alert(res);
        var tabID = res["tabID"];
        $scope.index = tabID;
        // alert($scope.index);
        $scope.$broadcast("app-tabChangeNotif",$scope.titleArr[tabID]);
    })
    // 返回按钮
    $scope.back = function () {
        $window.history.back();
        // console.log($window.history);
    }

    $scope.location = $location;
    // hash变化按钮显示问题
    $scope.$watch("location.url()", function (newV, oldV) {
        // console.log(newV);
        if (newV.toString().indexOf("list") != -1){
            $scope.hasReturn = false;
        }else {
            $scope.hasReturn = true;
        }
    })

    /*
     // hash变化按钮显示问题
     $scope.$on("list-urlChangeNotif",function (eve, res) {
     if (res.url.indexOf("list")!=-1){
     $scope.hasReturn = false;
     }else {
     $scope.hasReturn = true;
     }
     })
     // hash变化按钮显示问题
     $scope.$on("detail-urlChangeNotif",function (eve, res) {
     if (res.url.indexOf("detail")!=-1){
     $scope.hasReturn = true;
     }else {
     $scope.hasReturn = false;
     }
     })
     */

    // console.log($location.url());
    // $scope.hasBack = $window.history>=2;
}])