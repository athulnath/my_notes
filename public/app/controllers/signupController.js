/**
 * New node file
 */
(function() {
	
angular
	.module("app")
	.controller("signupCtrl", signupController);
signupController.$inject = ["$scope", "User", "$location"];

////

function signupController($scope, User, $location) {
		
	$scope.formdata = {};
	
	$scope.register = function() {
		$scope.dataLoading = true;
		User.createUser($scope.formdata).then(function(response) {
			
			if(response.success) {
				$location.path("/login");
			} else {
				if(response.error.code === 11000) {
					$scope.error = "Username not available";
				}
				else {
					$scope.error = response.error;
					$scope.dataLoading = false;	
				}
			}
			
		});
	}
}
})();
