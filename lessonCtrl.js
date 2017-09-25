angular.module("lessonApp").controller("lessonCtrl", function($scope, lessonSrv){

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    
    $scope.announceDay = function(lesson, day){
        if(!day){
            console.log("Day is not specified");
        }else {
            console.log(lesson + ' is active on ' + day + '.');
        }
    }

})