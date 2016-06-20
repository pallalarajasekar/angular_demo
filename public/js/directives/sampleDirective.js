/**
 * Created by pallali on 15/6/16.
 */

eventsApp.directive('mySample',function ($compile) {
   return{

       /*link:function (scope, element, attrs, controller) {
           var markup="<input type='text' ng-model='sampleData'/>{{sampleData}}</br>";
           angular.element(element).html($compile(markup) (scope));
       }*/
       //restrict:"E",
       restrict:"C",
       template:"<input type='text' ng-model='sampleData'/>{{sampleData}}</br>",
       scope:{
            event:"=myEvent"
       }
   }
});