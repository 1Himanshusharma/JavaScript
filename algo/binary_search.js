function binary_search(arr,key){
  let start = 0;
  let end = arr.length;
  while (start < end){
    let mid = Math.floor((start + end)/2);
    if (arr[mid] == key){
      return mid;
    }
    if (arr[mid] > key){
      end = mid-1;
    }
    else{
      start = mid+1;
    }
  }
  return -1;
}
let arr = [0,1,2,3,4,5,6,7,8];
let key = 6;
console.log(binary_search(arr,7));