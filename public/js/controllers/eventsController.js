
eventsApp.controller("eventsController",function eventsController($scope,eventData, $anchorScroll){
    
    $scope.boolval=false;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
    $scope.sortorder='createname';

    // callls $https Services

    /*eventData.getevents()
        .success(function (events) {
            $scope.events=events;

        })
        .error(function (data, status, headers, config) {

        $log.warn(data, status, headers, config);

    })
    */
    //call $resource One way
    //$scope.events=eventData.getevents();

    //call $resource anthor way
    eventData.getevents()

      .$promise.then(
        function (events){
            $scope.events=events;
            console.log(events);
        },
        function (response) {
            console.log(response);

        }
    )
    $scope.scrollToSession=function () {

        $anchorScroll()
    }
})