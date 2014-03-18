'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope, $http) {
  	$scope.firstName = "Dilys";
  	$scope.firstNamePlace = "first name goes here";

  	// AngularJS build in HTTP service
  	$http.get('js/data.json').
  	success(function(data){$scope.data = data}).error(function(err){$scope.err=err});

  	//$scope.full_name = $scope.first_name + " " + $scope.last_name;
  })
  .controller('MyCtrl2', [function() {

  }]);