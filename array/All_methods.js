let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11,12];

console.log("Arr1: ",arr1);
console.log("Arr2: ",arr2);
console.log();
console.log("at index 0",arr1[0]);


//concat method is used to combined two different arrays
let children = arr1.concat(arr2);
console.log("Children: ",children);


//copywithin is used to copy element inside one of arr
//from start index till end index
//and place it at the target index
children.copyWithin(2,1,3);
console.log("After using copyWithin: ",children);

// used to make list of arr entries
let ent = children.entries();
for (let i of ent){
  console.log(i);
}


