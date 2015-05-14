/**
 * New node file
 */


myNotesApp.controller("signupCtrl", function($scope, User, $location) {
	
	
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
})
