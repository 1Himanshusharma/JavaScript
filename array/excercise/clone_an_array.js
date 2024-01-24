let x = [1,2,3,4,5];
console.log("ORiginal Array: ");
console.log(x);
// using spread operator
let y = [...x];
console.log("\nArray after spreading using the spread operator:");
console.log(y);

//using from
y = Array.from(x);
console.log("\nArray created from another array using Array.from() method:");
console.log(y)


// Array.prototype.slice() is used to create shallow copy of ans array
y = x.slice();
console.log("\nArray sliced to create a new array using slice():");
console.log(y);

