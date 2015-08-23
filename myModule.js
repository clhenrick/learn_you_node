var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module

// create a named function called filterFiles 
// takes 3 arguments: directory, file extension, callback function
function filterFiles(dir, ext, callback) {
    
    var dotExt = '.' + ext; // prepend a dot to our file extension to filter for
    var filteredList = []; // create an empty array to put our filtered file names in
    
    // read the input directory asynchronously
    // takes 2 arguments: a path to a directory and a callback function
    // our callback function takes error and data as arguments
    fs.readdir(dir,function(err,data){
        // if an error exists return our callback with the error
        if (err) return callback(err);
        
        // loop over the array of file names inside the data variable
        for (var i=0; i<data.length; i++) {
            // check for a file extension match
            if (path.extname(data[i]) == dotExt) {
                // if theres a match push the file name to our filteredList array
                filteredList.push(data[i]);
            }
        }
        
        // invoke our callback with our filteredList
        callback(null, filteredList);
    });
}

// export our function filterFiles!
module.exports = filterFiles;