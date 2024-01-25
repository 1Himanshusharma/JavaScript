// Declare and initialize a simple 2-D array
let arr = [[1, 2, 3, 4], [5, 3, 5, 2], [7, 8, 9, 6], [9, 7, 2, 4]];

// Iterate through rows
for (let i in arr) {
  // Output the current row index
  console.log("row " + i);

  // Iterate through each element in the current row
  for (let j in arr[i]) {
    // Output the current element value
    console.log(" " + arr[i][j]);
  }
}
