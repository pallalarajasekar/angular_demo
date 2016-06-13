
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}
var events=require('./eventController');
var us = require('underscore');
var assert = require('assert');
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;

app.get('/data/event/:id',events.get);
//app.post('/data/event/:id',events.save);
app.get('/', function(req, res){
    res.render("EventDetails")
})
app.get('/NewEvent',function (req,res) {
    res.render("NewEvent")
})

app.get('/edit',function (rea,res) {
    res.render("EditProfile")

})

app.get('/cache',function (req,res) {
    res.render('cacheSimple')
})
app.get('/com',function (req,res) {
    res.render('compleSimple')
})
app.get('/local',function (req,res) {
    res.render('localSample')
})
app.get('/time',function (req,res) {
    res.render('timeSample')
})
app.get('/filter',function (req,res) {
    res.render('filterServiceSample')
})
app.get('/cookie',function (req,res) {
    res.render('cookieSample');
})