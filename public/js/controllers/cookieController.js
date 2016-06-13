/**
 * Created by pallali on 11/6/16.
 */

eventsApp.controller('cookieController', function cookieController($scope, $cookieStore) {

    $scope.event={id:1, name:'Pallali'};

    $scope.saveCookie=function (event) {

        $cookieStore.put('event',event);
    };
    $scope.getCookie=function () {
        
        console.log($cookieStore.get('event'));
    };
    $scope.removiCookie=function () {

        $cookieStore.remove('event');
    }
});