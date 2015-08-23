var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module
var dir = process.argv[2];  // get the directory path (1st argument to the script)
var ext = process.argv[3]; // get the extension to filter for (2nd argument)

// asynchronously read input directory
// when finished reading directory, invoke a callback
// callback takes error and data (contents of the directory, a list of files) as parameters
fs.readdir(dir, function(error,data){
    // if 
    if (error) throw error;
    // console.log(data);
    
    // concatenate a dot to our file extension
    var dotExt = '.' + ext;
    
    log();
    
    // iterate over array of file names
    for (var i=0; i<data.length; i++) {
        
        // if the file extension matches node school's file extension
        if (path.extname(data[i]) == dotExt) {
            // print the file name
            console.log(data[i]);
        }
    }
});

// will throw an error because dotExt is outside of the global scope
function log() {
    console.log(dotExt);
}