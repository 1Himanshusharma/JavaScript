// declare and initialize the original array
let arr = [-2,8,7,6,5,-1,-4,3,2,1];

//Declare an empty array to store the sorted resutl
let result = [];

let min = arr[0];
let pos;
let max = arr[0];

// find the maximum value in the original array
for (let i = 0;i< arr.length;i++){
  if (max < arr[i]) {
    max = arr[i];
  }
}

//selection sort algorithm:
for (let i = 0;i < arr.length;i++){
  // Iterate over the original array to find the minimum element
  for (let j = 0;j < arr.length ;j++){
    //check if the element is not marked as pro
    if (arr[j] != 'X'){
      if (min > arr[j]){
        min = arr[j];
        pos = j;
      }
    }
  }
  // store the minimum element in the sorted array
  result[i] = min;

  // mark the minimum element as processed by replacing it with "x"
  arr[pos] = 'X';
  // reset min to the maximum
  min = max;
}


console.log(result)