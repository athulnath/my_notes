
myNotesApp.controller('HeaderCtrl', function($scope, AuthenticationService, $location, $window) {
	
	$scope.AuthService = AuthenticationService;
	
	$scope.loggedIn = AuthenticationService.isLogged;
	
	$scope.$watch('AuthService.isLogged', function() {
		$scope.loggedIn = $scope.AuthService.isLogged; 
	});
	
	
	$scope.logout = function () {
		
		if(AuthenticationService.isLogged) {
			AuthenticationService.isLogged = false;
			delete $window.sessionStorage.token;
		}
		
		$location.path("/login");
	};
	
});
