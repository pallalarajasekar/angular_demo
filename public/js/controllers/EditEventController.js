/**
 * Created by pallali on 8/6/16.
 */

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData,$route) {

        $scope.saveEvent=function(events, newEventForm){

            console.log("neweventform");
            console.log($route.current.foo);
            console.log($route.current.param.foo);//anthor way get URL data

           //page reload in this way
            $scope.reload=function () {

                $route.reload();
            }
            
            if(newEventForm.$valid) {
                
                console.log("valid form");
                //window.alert('event' + events.name + 'save!');
                eventData.save(events)
                    .$promise.then(
                    function (response){
                        console.log('success',response);
                    },
                    function (response) {
                        console.log('failure',response);
                    }
                );
            }
        };

        $scope.cancelEdit=function(){
            window.location='/EventDetails.html';
        }
        

})