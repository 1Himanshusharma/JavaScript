//funcation to get the last n elements of an array
function last(array,n){
  // checking if the input array is null, return undefined if true
  if (array == null){
    return 0;
  }
  // check if the value of n is null, return the last element of the array if true
  if (n == null){
    return array[array.length -1];

  }

  //using the slice method to get the last n elments of the array
  // Math.max is used to ensure that the startign index is not negative
  return array.slice(Math.max(array.length - n,0));
};

//test
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));