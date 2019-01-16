var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
    res.end('Privet');
});

server.listen(3000, '64.188.7.154');

console.log("LESTEN PORT 3000");




