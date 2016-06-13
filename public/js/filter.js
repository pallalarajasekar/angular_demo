/**
 * Created by pallali on 8/6/16.
 */

eventsApp.filter('durations',function(){

    return function(duration){

        switch (duration){

            case 1: 
                return "half hour";
            case 2:
                return " one hour";
            case 3:
                return "half day";
            case 4:
                return "Full day";
        }
    }
})