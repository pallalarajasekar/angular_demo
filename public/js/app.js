/**
 * Created by pallali on 1/6/16.
 */

var eventsApp=angular.module("eventsApp",['ngResource','ngRoute'])

    .config(function ($routeProvider) {

        $routeProvider.when('/newEvent',
            {
                foo: 'bar',
                templateUrl:'templates/NewEvent.html',
                controller:'EditEventController'
            }
        );
        //$routeProvider.otherwise({redirectTo:'/newEvent'})
        $routeProvider.when('/sampleDirective',
            {
                templateUrl:'templates/sampleDirective.html',
                controller:'sampleDirectiveController'
            }
        )
    });
    /*.factory('myCache',function ($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3});
    })*/