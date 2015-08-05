(function(){
	angular
		.module("app")
		.controller("adminCtrl", adminController);

		adminController.$inject = ["$scope", "$http", "$window", "Config"];

		////
		function adminController($scope, $http, $window, Config) {
			$scope.formdata = {};
			$scope.formdata.dataLoading = false;
			$scope.formdata.success = false;
			$scope.formdata.error = false;

			$scope.generateID = function() {
				$scope.formdata.dataLoading = true;
				$http.post(Config.baseUrl + "/api/generateapp", {
				appname: $scope.formdata.application,
				id: $window.sessionStorage.userId,
				token: $window.sessionStorage.token
			}).success(function(res) {
				if(res.success === true) {
					$scope.formdata.success = true;
					$scope.formdata.error = false;
					$scope.response = res.message;
					$scope.data = res.data;
				} else if(res.message) {
					$scope.formdata.error = true;
					$scope.formdata.success = false;
					$scope.response = res.message;
				}
				$scope.formdata.dataLoading = false;
			}).error(function(status, data) {
				console.log(status);
				console.log(data);
				$scope.formdata.dataLoading = false;
			});
		}
	}
})();
