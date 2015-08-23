// ex08.js
// like exercise 7 but collect all data before writing to stdout
// write two lines, the first is the number of characters, the second the collected data

var http = require('http');
var url = process.argv[2];
var dataStore = [];

http.get(url, function(res) {    
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    dataStore.push(chunk);
  });
  // end is where we finally output our data
  res.on('end', function() {
    var fin = dataStore.join('');
    console.log(fin.length)
    console.log(fin);
  });
}).on('error', function(e) {
  console.error(e);
});

// actual answer -- using the bl module
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })