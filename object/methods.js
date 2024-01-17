let person = {
  Name: "Himanshu",
  age: 21,
  gender: "Male"
}

console.log("Original Object: ", person);
//it will return object in dic



//crete copy
let New_object = Object.assign(person);

console.log("Copy object: ",New_object);



//create is used to create a new object with specidied prototype object and 
//properties
// we can use new here also

let new_object = Object.create(person);
for (let i in person){
  new_object[i] = person[i];
}
console.log("create: ",new_object);