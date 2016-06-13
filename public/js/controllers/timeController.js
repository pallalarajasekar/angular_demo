/**
 * Created by pallali on 11/6/16.
 */

eventsApp.controller("timeController", function timeController($scope, $timeout) {

    console.log("time Out");

   var promise = $timeout(function () {

       $scope.name= "Pallali";
    },3000);
    
});