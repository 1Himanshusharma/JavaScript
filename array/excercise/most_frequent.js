var arr = [3, 'a','a','a',2,3,'a',3,'a',2,4,9,3];

//initailize variable to track the most frequent item
let mf = 1;
let m = 0;
let item;

// Iterate through the array to find the most frquenet item
for (let i = 0;i < arr.length;i++){
  //nested loop to compare the current item with others in the array
  for (let j = i;j < arr.length;j++){
    //check if the current item matches with another item in arr
    if (arr[i] == arr[j]){
      m++;
    }
    //update the most frequent item and its frequenct
    if (mf < m){
      mf = m;
      item = arr[i];
    }
  }
  //reset the current item's frequenct
  m = 0;
}


console.log(item + " ( " + mf + " times )");