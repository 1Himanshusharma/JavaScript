let numbers = new Array(1,2,4,5,6,7);
// this is when numbers of array is alredy defined
console.log(numbers)

let number2 = new Array(5);
console.log(number2);

//accessing the element
console.log("Accessing elements using index: ");
console.log(numbers[3]);
console.log(numbers.at(3));


//  concating
for (let i = 0;i<number2.length;i++){
  number2[i] = 2;
}
console.log(number2)

let final_number = numbers.concat(number2);
console.log(final_number)

// copywithin is used to change the positions within same array
console.log("Using copyWithin");
console.log(final_number.copyWithin(1,3)) // it will take



//entries
let ent_number = numbers.entries();
// it will store only unqiue entries only
for (let i of  ent_number){
  console.log(i[0]," : ",i[1]);
}
// fill

numbers.fill(1,1,2);
console.log(numbers);

// of
let new_arr = Array.of(1,2,3,4,5);
console.log(new_arr);