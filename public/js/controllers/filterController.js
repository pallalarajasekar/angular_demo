/**
 * Created by pallali on 11/6/16.
 */

/*eventsApp.controller('filterController', function filterController($scope, $filter) {

    $scope.data={};

    var durations=$filter('durations');
    $scope.data.duration1=durations(1);
    $scope.data.duration2=durations(2);
    $scope.data.duration3=durations(3);
    $scope.data.duration4=durations(4);
});*/

// Anthor way

eventsApp.controller('filterController', function filterController($scope, durationsFilter) {

    $scope.data={};

    //var durations=$filter('durations');
    $scope.data.duration1=durationsFilter(1);
    $scope.data.duration2=durationsFilter(2);
    $scope.data.duration3=durationsFilter(3);
    $scope.data.duration4=durationsFilter(4);
});