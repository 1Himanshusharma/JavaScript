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