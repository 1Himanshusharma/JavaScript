// it will helpfull when we need to create copy of object

let person = {
  Name: "Himanshu",
  age: "21",
  gender: "Male"
};

//now i want to create instance of object

let New_object = new Object();
//this will create a instance of class

// so now we have a instance of Object


// copy the data from person to New_object
for (let i in person){
  New_object[i] = person[i];
}

// print all the things in New_object

for (let i in New_object){
  console.log(i + " : " + New_object[i]);
}