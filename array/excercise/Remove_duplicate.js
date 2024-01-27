//function
function removeDuplicates(num){
  //Initialize variables: x for iteration,
  // 
  let x;
  let len = num.length;
  let out = [];
  let obj = {};
  //Iterate through the input array and add each element to the object with a value of 0
  for (x = 0;x < len;x++){
    obj[num[x]]++;
  }
  // object has unique property that's why we were able to solve that


  // Iterate thorugh the object and push each unique element to the output
  for (x in obj){
    out.push(x);
  }
  //return the array containing unique elements
  return out;
}
let Mynum = [1,2,3,4,4,5,5,6,7,7,88,88,6,7];
//call
let result = removeDuplicates(Mynum);

//output the original array and the result array without duplicate
console.log(Mynum);
console.log(result);



