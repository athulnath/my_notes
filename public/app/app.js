// (function() {
var myNotesApp = angular.module("app", ['ngRoute']);


angular
	.module("app")
	.config(routerConfig)
	.config(tokenInterceptor)
	.run(runApp)

/////

runApp.$inject = ["$rootScope", "$location", "AuthenticationService"];
function runApp($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/login");
        }
    });
}

tokenInterceptor.$inject = ["$httpProvider"];
function tokenInterceptor($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}


routerConfig.$inject = ["$routeProvider"];
function routerConfig($routeProvider) {
		$routeProvider
		.when("/addStudent", {
			templateUrl: "addStudent.html",
			controller: "addStudentCtrl",
			access: { requiredLogin: false }
		})
		.when("/signup", {
			templateUrl: "views/userLogin/signup.html",
			controller: "signupCtrl",
			access: { requiredLogin: false }
		})
		.when("/login", {
			templateUrl: "views/userLogin/login.html",
			controller: "loginCtrl",
			access: { requiredLogin: false }
		})
		.when("/logout", {
			controller: "loginCtrl",
			access: { requiredLogin: true }
		})
		.when("/admin", {
			templateUrl: "views/admin/index.html",
			controller: "adminCtrl",
			access: { requiredLogin: true}
		})
		.when("/myapps", {
			templateUrl: "views/admin/myapps.html",
			controller: "appsCtrl",
			access: { requiredLogin: true}
		})
		.otherwise("/login");
}
// })();
