
eventsApp.controller("eventsController",function eventsController($scope){
    
    $scope.boolval=false;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
    $scope.events={
        name:"Angular",
        time: "5.30 am" ,
        date: "1/06/2016",
        
        location:{
            address:"A.M.Puram(v),Kanavaram(p)",
            city:"Sathyavedu",
            state:"A.P"
        },
        imageUrl:"/img/AngularJS-large.png",
        session:[
            {
                name:"session1",
                createname:"pallala",
                voteUpCount:0
            },
            {
                name:"session2",
                createname:"raja",
                voteUpCount:0
            },
            {
                name:"session3",
                createname:"sekhar",
                voteUpCount:0
            }
        ]
    }
})