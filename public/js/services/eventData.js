/**
 * Created by pallali on 9/6/16.
 */

eventsApp.factory('eventData', function ($resource) {

    var resource=$resource('/data/event/:id',{id:'@id'});
    return{

        getevents:

        //$http Service

            /*function (successcb) {

            return $http({method: 'GET', url: '/data/event/1'})
        }*/
            //$resource Service
            /*function () {

                   return $resource('/data/event/:id',{id:'@id'}).get({id:1});

               }*/

            //Saving resource data
            function () {
                return resource.get({id:1});
            },
        save:function (events) {
            events.id=999;
            return resource.save(events);

        }

        }

});