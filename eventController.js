/**
 * Created by pallali on 9/6/16.
 */

var fs=require('fs');

module.exports.get = function (req,res) {

    var event=fs.readFileSync('public/data/event/' +req.params.id+ '.json', 'utf8');
    res.setHeader('Content-Type','application/json');
    res.send(event);
    console.log("get:" +event);

}

module.exports.save = function (req,res) {

    var event=req.body;
    fs.writeFileSync('public/data/event/' +req.params.id+ '.json',JSON.stringify(event));
    res.send(event);
    console.log("save:" +event);
}