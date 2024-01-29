// function to shuffle an array using the Fisher-Yates algorithm
function shuffle(arr){
  // initialize variable: ctr is the counter, temp is a temp, index is random
  let ctr = arr.length; 
  let temp,index;

  //while there are elements in the array
  while (ctr > 0){
    // pick a random index
    index = Math.floor(Math.random() * ctr);
    // decrease ctr by 1
    ctr--;

    // swap the last element with the randomly picked element
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
}
console.log(shuffle([0,1,2,3,4,5,6,7,8]));