var fs = require('fs');
var data = fs.readFileSync('db.json');
var sensorsDb = JSON.parse(data);
console.log(sensorsDb); 

console.log('server started');
var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var server = app.listen(port, listening);

function listening() {
    console.log(`listening at port ${port} ...`);
}
 
app.use(express.static('website'));

// url example localhost:3000/all
app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(sensorsDb);
}

                                // key  value
// url example localhost:3000/add/value/5
app.get('/add/:sensor/:value?', updateSensor);

function updateSensor(request, response) {
    var data = request.params;
    var sensor = data.sensor;
    var value = Number(data.value);
    var reply;
    if (!value) {
        reply = "value is required";
    } else {

    sensorsDb[sensor] = value;

    var data = JSON.stringify(sensorsDb, null, 2);
    fs.writeFile('db.json', data, finished);
    function finished(err) {
        console.log('all set');
    } 


   reply = "The info has been sent";
}
response.send(reply);
}