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
				console.log("ok logged in success");
			}).error(function(status, data){
				console.log(status);
				console.log(data);
				console.log("failed");
			}); 
		}
	}
	
	$scope.logout = function () {
		if(AuthenticationService.isLogged) {
			AuthenticationService.isLogged = false;
			delete $window.sessionStorage.token;
		}
		$location.path("/login");
	}
})
