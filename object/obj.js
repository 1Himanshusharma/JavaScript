//Define the object
let person = {
  Name: "Himanshu",
  age: 21,
  gender: "Male"
}

//Update the Name property
person.Name = "Sharma";


// creating new object using the Object constructor
// how we gonna do that


let ObjectName = new Object();


//now copy all the data from person to objectName

for (let i in person){
  ObjectName[i] = person[i];
}


//Display the properties of the "ObjectName".
for (let i in ObjectName){
  console.log(i+" : " + ObjectName[i]);
}

