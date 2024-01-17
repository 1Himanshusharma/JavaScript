//so we will make a constuctor in this 
// where we will create constructor using funcation

function person(Name,age,gender){
  this.Name = Name;
  this.age = age;
  this.gender = gender;
}
// now i can make as much as object that i want


// i need to set the values in 'this' pointer in heap

let My_object = new person("Himanshu",21,"Male");
// new keyword is used to alloate dynamic memory
for (let i in My_object){
  console.log(i + " : " + My_object[i]);
  
}