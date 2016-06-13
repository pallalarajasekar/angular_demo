/**
 * Created by pallali on 10/6/16.
 */

eventsApp.controller('compileController',function compileController($scope, $compile, $parse) {

    var fn=$parse('5+1');
    console.log(fn());

    var getter=$parse('event.name');

    var context1={event:{name:'Hai Pallali'}};
    var context2={event:{name:'Hai ashi'}};

    console.log(getter(context1));
    console.log(getter(context2));

    console.log(getter(context2,context1));

    var setter=getter.assign;
    setter(context2,'I love U ashi');

    console.log(context2.event.name);

    console.log(getter(context2));
    
    $scope.appendDivToElement = function (markup) {

        return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
    }

});