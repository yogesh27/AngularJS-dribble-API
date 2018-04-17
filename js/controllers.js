'use strict';


var controllers = angular.module('dabbble.controllers', []);

controllers.controller('AppCtrl', function($scope){
    $scope.name = "World";
});

controllers.controller('ShotsListCtrl', function($scope, $routeParams, $http){

    var list = $routeParams.list;

    $http.jsonp('https://api.dribbble.com/v1/shots?list='+ list +'&callback=JSON_CALLBACK&access_token='+ AUTH_TOKEN).then(function(data){
        $scope.list = data.data;
    });
});


controllers.controller('ShotsCtrl', function($scope, $http, $routeParams){
    
    var id = $routeParams.id;

    $http.jsonp('https://api.dribbble.com/v1/shots/'+ id +'?callback=JSON_CALLBACK&access_token='+ AUTH_TOKEN).then(function(data){
        var shotData = data.data;
        $scope.shot = shotData.data;
    });

});
