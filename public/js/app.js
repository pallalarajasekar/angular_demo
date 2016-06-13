/**
 * Created by pallali on 1/6/16.
 */

var eventsApp=angular.module("eventsApp",['ngResource','ngCookies'])
    .factory('myCache',function ($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3});
    });