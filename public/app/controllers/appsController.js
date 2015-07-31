(function(){
	angular
		.module("app")
		.controller("appsCtrl", appsController);

	appsController.$inject = ["$scope","$http", "$window"];

	////

	function appsController($scope, $http, $window) {
		$scope.data = [];


		$scope.getApps = function() {
			$http.post("/api/apps", {
				id: $window.sessionStorage.userId,
				token: $window.sessionStorage.token
			}).success(function(res) {
				if(res.success === true) {
					$scope.data = res.data;
					$scope.formdata.success = true;
					$scope.formdata.error = false;
					$scope.response = res.message;
				} else if(res.message) {
					$scope.formdata.error = true;
					$scope.formdata.success = false;
					$scope.response = res.message;
			}
			}).error(function(status, data) {
		});
	}

	$scope.getApps();
	}
	

})();