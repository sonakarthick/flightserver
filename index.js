const express = require("express");
var app = express();

app.get('/getflights', function (req, res) {
    console.log("Get Flights Page");
    res.send('Hello GET Flights -- getting the list from mongoDB');
 })

 app.get('/bookflight', function (req, res) {
    console.log("Book Flight Page");
    res.send('Flights Booked in MongodB');
 })

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})