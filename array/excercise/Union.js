function union(arr1, arr2) {
  // Check if either of the array is null, return
  if (arr1 == null || arr2 == null) {
    return undefined;
  }

  // Initialize an empty object to store unique elements from both arrays
  let obj = {};

  // Add elements from arr1 to the object
  for (let i of arr1) {
    obj[i] = true;
  }

  // Add elements from arr2 to the object
  for (let i of arr2) {
    obj[i] = true;
  }

  // Push all keys (unique elements) into the resultant array
  let res = [];
  for (let prop in obj) {
    res.push(parseInt(prop)); // Convert property to integer if needed
  }

  return res;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
