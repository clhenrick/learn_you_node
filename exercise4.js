var fs = require('fs');
var file = process.argv[2];
var numLines = 0;

// asynchronously read the file
// when done reading execute a callbck function
fs.readFile(file, function(error, data){
    // first check to see if there was an error
    if (error) throw error;
    // if there was no error then operate on data
    var text = data.toString();
    var splitText = text.split('\n');
    numLines = splitText.length-1;
    console.log(numLines);
});