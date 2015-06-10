/**
 * New node file
 */


myNotesApp.controller("loginCtrl", function($scope, User, $location, AuthenticationService, $window) {
	
	
	$scope.formdata = {};
	
	$scope.login = function() {
		if($scope.formdata.username !== undefined && $scope.formdata.password !== undefined) {
			User.login($scope.formdata.username, $scope.formdata.password).success(function(data) {
				AuthenticationService.isLogged = true;
				$window.sessionStorage.token = data.token;
				$location.path("/admin");
			}).error(function(status, data){
				console.log(status);
				console.log(data);
				console.log("failed");
			}); 
		}
	}
});

myNotesApp.controller("adminCtrl", function($scope, AuthenticationService) {
	$scope.testFunc = function() {
		AuthenticationService.isLogged = !AuthenticationService.isLogged;
	}
});
