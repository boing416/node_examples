var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
    res.end('Privet');
});

server.listen(3000, '11.111.111.111');

console.log("LESTEN PORT 3000");




