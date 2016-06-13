/**
 * Created by pallali on 11/6/16.
 */

eventsApp.controller('localController', function localController($scope, $locale) {

    console.log("date");
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    throw {message:'error message'};

});