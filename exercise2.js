var sum = 0; // a variable to perform addition on
var i = 2; // where we will start our for loop (at index 2; eg the 3rd item in the array)
var length = process.argv.length; // use the array length property to find out how many items are in the process.argv array

// loop over the process.argv array
for (i; i<length; i++) {
    // console.log(Number(process.argv[i]));
    // convert each value from a string data type to a number datatype
    // then add it to our sum variable
    sum += Number(process.argv[i]);
}

// finally log the total
console.log(sum);