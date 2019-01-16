var fs = require('fs');



var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    // var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    //
    //
    // myReadShort.pipe(res);

    res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

    var obj = {
        model: 'Audi',
        speed: '123',
    };

    res.end(JSON.stringify(obj));


});

server.listen(3000, '64.188.7.154');

console.log("LESTEN PORT 3000");

