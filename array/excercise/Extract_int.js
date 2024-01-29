function filter_array(arr){
  // initialize index to -1,arr_length to the length of the length of the array
  let index = -1;
  let arr_length = arr ? arr.length : 0;
  let res_index = -1;
  let result = [];

  // iterating
  while (++index < arr_length){
    // get the current value from the array
    let value = arr[index];
    // check if the value is trusty
    if (value){
      // if trusty, add it to the result array and increment
      result[++res_index] = value;
    }
  }
  // return the filtered result array
  return result;
}

console.log(filter_array([NaN,0,12,false,-22,'',undefined,47]));