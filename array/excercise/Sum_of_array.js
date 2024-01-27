function sum_of_arr(array){
  let sum = 0;
  let i = array.length;
  while (i--){
    // 
    sum += Math.pow(array[i],2);
  }
  return sum;
}

console.log(sum_of_arr([1,2,4,5,6]));