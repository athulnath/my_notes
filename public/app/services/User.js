/**
 * New node file
 */
(function() {
	angular
		.module("app")
		.factory("User", userFactory);

	userFactory.$inject = ["$http", "Config"];

	function userFactory($http, Config) {
	
		var service = {
				createUser: createUser,
				login: login,
				logout: logout
		};

		return service;
	
		function createUser(data) {
			return $http.post(Config.baseUrl + "/user/register", data).then(function(response) {
				return response.data;
			});
		}
	
		function login(username, password) {
			return $http.post(Config.baseUrl + "/user/login", {username: username, password: password});
		}
	
		function logout() {
		
		}
	}
})();