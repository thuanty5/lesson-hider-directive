angular.module("lessonApp").service("lessonService", function(){

    this.getSchedule = function(){
        return $http.get('schedule.json');
    }

})