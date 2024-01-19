let arr = new Array();
// we have not specify the lenght that is why it is starting form 1 index 
// at 0 it has garbage and 0 value
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);


console.log(arr)

// it will returned undefined in javascript because we have not defined that 
console.log(arr[8])

let new_array = Array.of(1,2,3,4,5,6);

console.log(new_array)