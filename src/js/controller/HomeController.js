/**
 * Created by SHAW on 2018/3/17.
 */
angular.module("app").controller("HomeController", ["$scope","$http",function ($scope,$http) {
    $http({
        url:"http://127.0.0.1/doubanAPI/home.php",
        method:"jsonp"
    }).then(function (res) {
        $scope.listData = res.data;
        // console.log($scope.listData);
    }).catch(function (err) {
        console.log(err);
    })
}])