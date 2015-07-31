/**
 * New node file
 */
(function(){

angular
	.module("app")
	.controller("loginCtrl", loginController);
loginController.$inject = ["$scope", "User", "$location", "AuthenticationService", "$window"];

/////

function loginController($scope, User, $location, AuthenticationService, $window) {
	$scope.formdata = {};
	$scope.isError = false;
	$scope.formdata.dataLoading = false;
	$scope.login = function() {
		if($scope.formdata.username !== undefined && $scope.formdata.password !== undefined) {
			$scope.formdata.dataLoading = true;
			User.login($scope.formdata.username, $scope.formdata.password).success(function(data) {
				AuthenticationService.isLogged = true;
				$window.sessionStorage.token = data.token;
				$window.sessionStorage.userId = data.id;
				$location.path("/admin");
				$scope.formdata.dataLoading = false;
			}).error(function(status, data){
				$scope.isError = true;
				$scope.error = status.message;
				$scope.formdata.dataLoading = false;
			}); 
		}
	}
}	

})();
