/**
 * New node file
 */

myNotesApp.controller("helloController", function($scope, MathService) {
	
	$scope.name = $scope.name || ""; 
	$scope.name = "hey," + $scope.name;
	
	$scope.data = MathService.multiply(5, 2);
	
	$scope.nameFlag = true;
	$scope.toggleInput = function() {
		$scope.nameFlag = !$scope.nameFlag;
	}
});

myNotesApp.controller("addStudentCtrl", function($scope) {
	$scope.message = "add student that was awsome";
})
