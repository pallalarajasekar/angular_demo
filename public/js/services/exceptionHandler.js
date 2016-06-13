/**
 * Created by pallali on 11/6/16.
 */

eventsApp.factory('$exceptionHandler',function () {
    
    return function (exception) {

        console.log("exception handled: " +exception.message);
    };
});