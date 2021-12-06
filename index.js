const express = require("express");
var app = express();

app.get('/getflight', function (req, res) {
    console.log("Get Flights Page")``;
    res.send('Hello GET');
 })

 app.get('/bookflight', function (req, res) {
    console.log("Book Flight Page");
    res.send('Flights Booked');
 })

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})