var http = require('http'); // import the http node core module
var theURLs = [process.argv[2], process.argv[3], process.argv[4]]; // store the urls in an array
var count = 0; // counter keep track of how many get requests have been made
var allTheData = []; // store our data for each get request

// get data from a url
function getData(url) {
    // store the data from the get request on a url
    var dataStore = '';
   
    // make a get request to a url
    // the callback gives us the response
    http.get(url, function(res){
        // convert from binary to text using utf8 encoding
        res.setEncoding('utf8');
        
        // on a data event store our chunk of data
        res.on('data', function(sandwich){
            // add our chunk (aka 'sandwich') to datastroe
            dataStore += sandwich;
        });
        
        // on an end event (when the response is done emitting data)
        res.on('end', function(){
            // increment our count variable
            count += 1;
            // find out the position of the url (its index in theURLs)
            var index = theURLs.indexOf(url);
            // use the index to assign data to the correct position in allTheData
            allTheData[index] = dataStore;
            
            if (count === 3) {
                printData();
            }
        });
        
        // listen for an error and if so log it
        res.on('error', console.error);
    });
    
}

function printData() {
    for (var i=0; i<allTheData.length; i++) {
        console.log(allTheData[i]);   
    }
}

for (var i = 0; i < theURLs.length; i++) {
    getData(theURLs[i]);    
}
