// exercise 13
// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. 
// Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
// eg: /api/parsetime?iso=2013-08-10T12:10:15.474Z

var http = require('http');
var url = require('url');
var port = process.argv[2];

// function to parse our properly formatted time string to 
// an object containing hours, minutes, & seconds
function parseTime(time) {
  return {
    "hour" : time.getHours(),
    "minute" : time.getMinutes(),
    "second" : time.getSeconds()
  };
}

// function to parse our properly formatted time string to 
// an object containing unix time
function getUnixTime(time) {
  return {
    unixtime : time.getTime()
  };
}


var server = http.createServer(function(req,res) {
  // let's take a look at the request object. 
  // Warning! It's really long so pipe it through `less` in terminal
  // scroll down till you find url
  // hint: we can also do: learnyounode run ex13.js | grep --line-buffered "url"
  // console.log('req: ', req);
  
  // now that we found the url string inside the response, let's parse it using the url module
  var parsedURL = url.parse(req.url, true);
  
  // what's in the parsed url?
  // console.log(parsedURL);
  
  // query.iso is what we are looking for & we can pass that to a Date object to properly format it
  var time = new Date(parsedURL.query.iso);
  
  // let's see what that looks like:
  // console.log('time: ', time);
  
  // variable to store our parsed time object when we're done
  var result 

  // let's test a regular expression to find out which url we are dealing with
  // we start RX with a "/" and end it with a "/"
  // to search for an actual "/" we need to escape it with "\"
  // the carrot means only search if the string starts with an "/"
  // console.log(/^\/api\/parsetime/.test(req.url));

  // if the url string is for parsetime send time to the parseTime() function
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time);

    // otherwise if the url string is for unixtime send time to the getUnixTime() function
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = getUnixTime(time);
  }

  if (result) {
    // if we have a result send it to the client as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // we need to "stringify" the JSON object for it to be read by the client
    res.end(JSON.stringify(result))
  } else {
    // otherwise send a 404 response to the client with no data
    res.writeHead(404)
    res.end()
  }

})

// start our server by listening to the port provided to us by learnyounode
server.listen(port);