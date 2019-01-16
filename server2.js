var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    if(req.url === "/index" || req.url === "/")
    {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === "/about")
    {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else if(req.url === "/login")
    {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/login.html').pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }




});

server.listen(3000, '111.111.111.111');

console.log("LESTEN PORT 3000");

// sudo netstat -plten |grep node
//kill -9 16085