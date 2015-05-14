/**
 * New node file
 */

myNotesApp.factory('User', ['$http', function($http) {
	
	var service = {};
	service.createUser = createUser;
	return service;
	
	function createUser(data) {
		return $http.post("/user/register", data).then(function(response) {
			return response.data;
		});
	}
}]);