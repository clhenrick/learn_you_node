var http = require('http'); // import the http node core module
var map = require('through2-map'); // import the through2-map third party module
var port = process.argv[2]; // get the port number from the first argument to our script

// create the server, the callback is passed request and response objects
var server = http.createServer(function(req,res) {
    // console.log(req);
    
    // check to see if the request method is a POST
    if (req.method != 'POST') {
        // if it's not a POST then do an early return
        return res.end();
    }
    
    // pipe the request data to through2-map
    req.pipe(map(function(chunk){
        // return the chunk of data as a string converted to uppercase characters
        return chunk.toString().toUpperCase();
    // pipe the altered chunk of data to the response
    })).pipe(res);
});

// tell our server to listen for connections on the specified port
server.listen(port);