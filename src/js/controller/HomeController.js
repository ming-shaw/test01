/**
 * Created by SHAW on 2018/3/17.
 */
angular.module("app").controller("HomeController", ["$scope","myHttp",function ($scope,myHttp) {
    // 使用封装的http发送请求
    var url = "http://127.0.0.1/doubanAPI/home.php";
    myHttp.jsonp(url, null, function (res) {
        $scope.listData = res.data;
    }, function (err) {
        console.log(err);
    });

    // $http({
    //     url:"http://127.0.0.1/doubanAPI/home.php",
    //     method:"jsonp"
    // }).then(function (res) {
    //     $scope.listData = res.data;
    //     // console.log($scope.listData);
    // }).catch(function (err) {
    //     console.log(err);
    // })
}])