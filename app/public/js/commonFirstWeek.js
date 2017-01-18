var firstWeek = angular.module('MEH',['ngRoute']);


firstWeek.controller('commonCtrl',['$scope','$http',function($scope,$http) {
    $http.get("https://year2016.herokuapp.com/commonFirstWeek").success(function(data){
        $scope.commonFirstWeek = data; 
        console.log(data);
   });
    $http.get("https://year2016.herokuapp.com/commyear").success(function(data){
        $scope.commonYear = data; 
        console.log(data);
   });
    $http.get("https://year2016.herokuapp.com/commonSecondtWeek").success(function(data){
        $scope.secondWeek = data; 
        console.log(data);
   });
}]);




