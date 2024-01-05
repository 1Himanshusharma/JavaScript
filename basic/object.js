const student = {
  fullName : "Rahul Kumar",
  age : 21,
  cgpa : 8.3
}
console.log(student);
// i think it is good thing in student
// we can declare object
console.log(typeof(student));

console.log(student.age);
console.log(student["age"]);

student["age"] = student["age"] + 1;
console.log("After incrementing the age");
console.log(student.age);

// updating name
student.fullName = "himanshu";
console.log(student.fullName); 