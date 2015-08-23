var sum = 0;
var i = 2;
var length = process.argv.length;

for (i; i<length; i++) {
    // console.log(Number(process.argv[i]));
    sum += Number(process.argv[i]);
}

console.log(sum);
// console.log(process);

