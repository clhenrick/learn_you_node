// exercise 7
// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. 
// Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http'); // import the node core http module
var url = process.argv[2];  // grab the URL string provided to us as an argument to our script

// if you're curious, take a look at what's inside the process.argv array
// the first item in the array is the file path to node, the second is the file path to our script, the third is URL provided to us
// console.log(process.argv);

// perform an http GET request on the url provided to us as an argument to our script
http.get(url, function(res) {
  // the response object has special methods associated with it we can use
  // one is to set the character encoding; here we set it to 'utf8'
  // this also converts the binary data to a human readable string data type
  res.setEncoding('utf8');
  
  // the "on" method lets us listen to specific events in the response
  // for example we can listen for an error in the response and log it to the console
  res.on('error', function(err) {
    console.log('res error: ', err);
  });
  
  // we can also listen for the 'data' event which is when a 'chunk' of data is retreived from the server
  res.on('data', function(data) {
    // for this exercise we log the contents of each 'data chunk'
    console.log(data);
  });
  
// log an error if one should happen with the http GET request
}).on('error', function(e){
  console.log('GET request error: ', e);
});

// actual answer from Learn You Node:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })