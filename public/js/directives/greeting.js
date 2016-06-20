/**
 * Created by pallali on 20/6/16.
 */

eventsApp.directive('greeting',function () {
    return{

        restrict:'E',
        replace: true,
        //priority:1,
        transclude:true,
        template:"<div><button type='btn', ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
        controller:function ($scope) {

            var greetings=['hello'];
            $scope.sayHello=function () {

                alert(greetings.join());
            }
            this.addGreetings=function (greeting) {
                greetings.push(greeting);
            }
        }
    }
})
.directive('finish',function () {
    return{
        restrict:'A',
        require:'^greeting',
        //priority:2,
        link:function (scope, element, attrs, controller ) {
            controller.addGreetings('Pallali');
        }
    }
})
.directive('telugu',function () {
    return{
        restrict:'A',
        require:'^greeting',
        //priority:3,
        //terminal:true,
        link:function (scope, element,attrs, controller) {
            controller.addGreetings('subothayam');
        }
    }
})