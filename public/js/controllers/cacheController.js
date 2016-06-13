/**
 * Created by pallali on 10/6/16.
 */

eventsApp.controller('cacheController',function cacheController($scope,myCache) {

    $scope.addToCache=function (key,value) {

        myCache.put(key,value);
    };
    $scope.readFromCache=function (key) {

       return myCache.get(key);
    };
    $scope.getCacheStats=function (key) {

        return myCache.info(key);
    }

})