
var myNotesApp = angular.module("myNotesApp", ['ngRoute']);

myNotesApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/addStudent", {
			templateUrl: "addStudent.html",
			controller: "addStudentCtrl"
		})
		.when("/signup", {
			templateUrl: "views/userLogin/signup.html",
			controller: "signupCtrl"
		})
		.when("/login", {
			templateUrl: "views/userLogin/login.html",
			controller: "signupCtrl"
		})
		.otherwise("/");
	
}]);