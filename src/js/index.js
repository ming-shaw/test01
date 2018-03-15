/**
 * Created by SHAW on 2018/3/11.
 */
;(function () {
    var app = angular.module("app",["ui.router"]);
    // 总控制器
    app.controller("appController",["$scope",function ($scope) {
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
    }])

    // 自定义导航组件
    app.directive("navs",function () {
        return{
            restrict:"EAMC",
            templateUrl:"../views/nav_tpl.html",
            controller:["$scope",function ($scope) {
                $scope.hasReturn = false;
                // $scope.index = 0;
                $scope.curTitle = "首页";

                $scope.$on("app-tabChangeNotif",function (e,res) {
                    $scope.curTitle = res;
                })
            }],
            scope:true
        }
    })
    // 自定义tabbar组件
    app.directive("tabbar",function () {
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

    // 配置tabbar内容路由
    app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("index",{
            url:"/index",
            views:{
                home:{
                    templateUrl:"../views/home_tpl.html",
                    controller:["$scope",function ($scope) {

                    }]
                },
                content:{
                    template:"<p>内容模板</p>"
                },
                author:{
                    template:"<p>作者模板</p>"
                },
                mine:{
                    template:"<p>我的模板</p>"
                }
            },

        })
        $urlRouterProvider.otherwise("/index");
    }])
})(angular)