/**
 * Created by SHAW on 2018/3/11.
 */
;(function () {
    var app = angular.module("app",["ui.router"]);
    app.controller("myController",["$scope",function ($scope) {
    }])
    app.directive("navs",function () {
        return{
            restrict:"EAMC",
            templateUrl:"../views/nav_tpl.html",
            controller:["$scope",function ($scope) {
            }]
        }
    })
    app.directive("tabbar",function () {
        return{
            restrict:"EA",
            templateUrl:"../views/tabbar_tpl.html",
            controller:["$scope",function ($scope) {

            }]
        }
    })
})(angular)