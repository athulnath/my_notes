
var myNotesApp = angular.module("myNotesApp", ['ngRoute']);

myNotesApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

myNotesApp.config(["$routeProvider", function($routeProvider) {
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
		.when("/admin", {
			templateUrl: "views/admin/index.html",
			controller: "adminCtrl",
			access: { requiredLogin: true }
		})
		.otherwise("/");
	
}]);

myNotesApp.run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/login");
        }
    });
});