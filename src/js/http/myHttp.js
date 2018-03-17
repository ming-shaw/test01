/**
 * Created by SHAW on 2018/3/17.
 */
angular.module("app").service("myHttp",["$http",function ($http) {
    this.jsonp = function (url, params, success, error) {
        $http({
            url:url,
            method:"jsonp",
            params:params
        }).then(function (res) {
            if (success) success(res);
        }).catch(function (err) {
            if (error) error(err);
        })
    }
}])