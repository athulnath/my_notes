(function() {
	angular
		.module("app")
		.controller("HeaderCtrl", headerController);
	headerController.$inject = ["$scope", "AuthenticationService", "$location", "$window"];	

	////

	function headerController($scope, AuthenticationService, $location, $window) {
	
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
	}

})();