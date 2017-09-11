angular.module("lessonApp").controller("lessonCtrl", function($scope){

    $scope.connect = "Angular Connected";

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = "two-way data binding";

})