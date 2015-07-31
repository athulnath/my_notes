(function(){
	angular
		.module("app")
		.factory("AuthenticationService", authenticationService);

		////
		function authenticationService() {
			return {
				isLogged: false		
			};
		}
})();