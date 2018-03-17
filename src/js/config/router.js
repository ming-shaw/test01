/**
 * Created by SHAW on 2018/3/17.
 */
// 配置白名单
angular.module("app").config(["$sceDelegateProvider",function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        "self", "http://127.0.0.1/doubanAPI/**"
    ])
}])
// 配置tabbar内容路由
angular.module("app").config(["$stateProvider","$urlRouterProvider",function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index",{
        url:"/index",
        views:{
            home:{
                templateUrl:"../views/home_tpl.html",
                controller:"HomeController"
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
        }
    }).state("index.list", { // 配置子路由
        url:"/list",
        templateUrl:"../views/home_list.html"
    }).state("index.detail", { // 配置子路由
        url:"/detail/:detail",
        templateUrl:"../views/detail_tpl.html",
        controller:["$scope", "$stateParams","$sce","$location", function ($scope,$stateParams,$sce,$location) {
            $scope.detail = $sce.trustAsHtml($stateParams.detail);
            // // url变化通知
            // $scope.$emit("detail-urlChangeNotif",{url:$location.url()})
            // alert($stateParams.detail);
        }]
    })
    $urlRouterProvider.otherwise("/index/list");
}])