/**
 * New node file
 */

myNotesApp.factory('User', ['$http', function($http) {
	
	var service = {
			createUser: createUser,
			login: login,
			logout: logout
	};
	
	return service;
	
	function createUser(data) {
		return $http.post("/user/register", data).then(function(response) {
			return response.data;
		});
	}
	
	function login(username, password) {
		return $http.post("/user/login", {username: username, password: password});
	}
	
	function logout() {
		
	}
}]);