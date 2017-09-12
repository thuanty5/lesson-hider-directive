angular.module("lessonApp").controller("lessonCtrl", function($scope){

    $scope.connect = "Angular Connected";

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = "two-way data binding";
    
    $scope.announceDay = function(lesson, day){
        if(!day){
            console.log(lesson + ' is not scheduled ');
        }else{
            console.log(lesson + ' is active on ' + day + '.');
        }
        
    }

})