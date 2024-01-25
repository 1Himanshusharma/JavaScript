// funcation for getting first n elements

function first(array,n){
  // check if the input array is null, return undefined if true
  if (array == null){
    return 0; 
  }
  // check if the value of n is null, return the first element of array
  if (n == null){
    return array[0];
  }
  //check if n is negaive or not
  if (n < 0){
    return [];
  }
  // use the slice method to get the first n elements of the array
  return array.slice(0,n);

}
console.log(first([1,2,3,4,5]));
console.log(first([],3));
console.log(first([1,2,3,4,5],3));
console.log(first([1,2,3,4,5,6],6));
console.log(first([1,2,4,5,6],-2));