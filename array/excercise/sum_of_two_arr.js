function sumarr(arr1, arr2) {
  let result = []; // Create a new array to store the sum of corresponding elements

  let index = arr1.length - 1;
  while (index >= 0) {
    result[index] = arr1[index] + arr2[index];
    index--;
  }

  return result;
}

console.log(sumarr([1, 2, 3, 4], [1, 2, 3, 4]));
