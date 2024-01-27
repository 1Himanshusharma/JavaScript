my_num = [1,3,4,5,34,2,4,66,43,2,34,5,5,33,54,5,6];

//create new set from the 
let uniqueSet = new Set(my_num);  //set is a collection of items in which all items are unique. It does not allow duplicate values.

let array = [...uniqueSet];
console.log("Original: ");
console.log(my_num);
console.log("Unique array: ");
console.log(array);