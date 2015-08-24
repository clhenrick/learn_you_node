var fs = require('fs'); // import the fs core module
var file = process.argv[2]; // get the 3rd argument from process.argv which is the input file name
var buffer = fs.readFileSync(file); // read the file synchronously and convert it to a buffer
var fileText = buffer.toString(); // convert the file buffer to a string of text
var splitText = fileText.split('\n'); // splitting our string into an array using a newline as the delimiter

// we have to log splitText.length -1 because there is no newline at the end of the file.
// remember, we are counting the number of newlines, not the number of items in the array for this exercise.
console.log(splitText.length-1);

