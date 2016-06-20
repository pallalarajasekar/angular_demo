/**
 * Created by pallali on 20/6/16.
 */

eventsApp.directive('repeatX',function () {

    return{
        /*link:function (scope, element, attributes, controller) {

            for(var i=0; i < Number(attributes.repeatX)-1; i++)
            {
                element.after($compile(element.clone().attr('repeat-x',0)) (scope));
            }
        }*/

        //Anthor way
        compile:function (scope, element, attributes, controller) {
            for(var i=0; i < Number(attributes.repeatX)-1; i++)
            {
                element.after(element.clone().attr('repeat-x',0));
            }
            return function (scope, element, attributes, controller) {

                attributes.$observe('text', function (newValue) {
                    if(newValue === 'Hello Pallali')
                    {
                        element.css('color','red');
                    }
                })
            }
        }
    }
});