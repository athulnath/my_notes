
var myNotesApp = angular.module("myNotesApp", ['ngRoute']);

myNotesApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/addStudent", {
			templateUrl: "addStudent.html",
			controller: "addStudentCtrl"
		});
}]);