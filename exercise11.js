var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
    // if everything went okay, tell the client we are sending text in the response
    res.writeHead(200, {"Content-Type" : "text/html"});
    // creating a read stream from the file contents and piping it to the response
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port);