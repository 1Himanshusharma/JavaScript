let name = "himanshu sharma";
// here i in represent the int value not char
// but in python in represent each and individual char
for (let i in name){
  console.log(i);
}

// in javascript of and in python in both operator are same
let My_name = "Ankit sharma";
for (let i of My_name){
  console.log(i);

}

let student = {
  Name : "Himanshu",
  age : 21,
  class : 2
}

for (let i in student){
  //here i only gives key not values
  // ye khuch intresting nahi hai kya
  console.log(i);
}
// we can't use of in objects
for (let i in student){
  console.log(i);
}

