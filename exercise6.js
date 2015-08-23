var myModule = require('./myModule'); // importing our own very speacil first module we ever made!
var dir = process.argv[2]; // first argument to our script is a filepath to a directory
var ext = process.argv[3]; // second argument to our script is the file extension to filter for

// creating a callback function to pass to myModule as the third parameter
//  will print out the results of our module
function myCallback(error, FileList){
    if (error) throw error;
    
    // forEach is a way to call a function on each item in the list
    // sort of a shorthand version of a for loop
    FileList.forEach(function(item){
        console.log(item);
    });
}

// invoke myModule with the path to the directory, the file extension to filter, and myCallback()
myModule(dir, ext, myCallback);

// myModule.makeExciting('Im so tired');