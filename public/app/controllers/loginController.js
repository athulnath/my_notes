/**
 * New node file
 */


myNotesApp.controller("loginCtrl", function($scope, User, $location, AuthenticationService, $window) {
	
	
	$scope.formdata = {};
	$scope.isError = false;
	$scope.login = function() {
		if($scope.formdata.username !== undefined && $scope.formdata.password !== undefined) {
			User.login($scope.formdata.username, $scope.formdata.password).success(function(data) {
				AuthenticationService.isLogged = true;
				$window.sessionStorage.token = data.token;
				$location.path("/admin");
			}).error(function(status, data){
				$scope.isError = true;
				$scope.error = status.message;
			}); 
		}
	}
});

myNotesApp.controller("adminCtrl", function($scope, AuthenticationService) {
	$scope.testFunc = function() {
		AuthenticationService.isLogged = !AuthenticationService.isLogged;
	}
});
