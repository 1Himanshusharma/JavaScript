// object.assign
const person = {
  Name: "Himanshu",
  age: 21,
  gender: "Male"
};
// assign is used to make copy of object
console.log("original person : ",person);
const person2 = Object.assign(person);
console.log(" person2 : ",person2);

console.log();

// object.create
const New_person = Object.create(person);
// it use to create new object
New_person.Name = "Ankit";
New_person.age = 22;
New_person.gender = "Male";

console.log("New_person: " , New_person);

//Object.defineProperties
const objWithProperties = {};
Object.defineProperties(objWithProperties,{
  pro1: { value: "value1", writable: true},
  pro2: { value: "value2", writable: false}
});
console.log("objWithProperties: ", objWithProperties)
//output is empty object because objwithproperties is empty object
console.log("pro1 : ",objWithProperties.pro1);
// it will return the value stored in value
console.log("pro2: ",objWithProperties.pro2);
// we know that we can the value of pro1 not pro2 because pro2 if not writable
objWithProperties.pro1 = "new_value";
console.log("New_pro1: ",objWithProperties.pro1);


// Object.property
const definedPropertyObject = {};
Object.defineProperty(definedPropertyObject, 'newProp',{
  value: "Some value",
  writable: true
})
// we can add some property in this given object
console.log("defineProperty: ",definedPropertyObject.newProp);

Object.defineProperty(objWithProperties,'new_prop',
{
  value: "New_value",
  writable: true
})
console.log("newProp: ",objWithProperties.new_prop);

// Object.entries()
// will return in array with [key : value];
const person_array = Object.entries(person);
console.log(person_array);

//object.freeze()
const frozenObject = {prop : "value"};
Object.freeze(frozenObject);
// cannot assign to read-only property
// means other code cannot delete or change its properties

//**** reverse of object.entries = object.fromentries */
const person2_array = Object.fromEntries(person_array);
console.log("Person2_aray: ",person2_array);


const person_arr = Object.entries(person);
const obj = Object.fromEntries(person_arr);
//ager
console.log("reverse object: ", obj);


// Object keys // collection of keys of object as array
console.log("person Object keys: ",Object.keys(person));


// Object values// collection of all values
console.log("Person Object values: ",Object.values(person));

// tumhe pta hai ki discripter ek aisi chij hai jo value 
console.log("Person Object entries: ",Object.fromEntries(person_arr));

// compare objects
//  it compare as well the type of objects
console.log(Object.is('5',5));

// is extesionable
console.log("IS extensionable: ",Object.isExtensible(person));

// Prevent extensinable
Object.preventExtensions(person);
// it will avoid further adding of valus to the Object
console.log("Is extenstionable: ",Object.isExtensible(person));

//prevent from adding, altering, removing, preserve everything
//
console.log("IS Frozen: ",Object.isFrozen(person));
Object.freeze(person);
console.log("Is Frozen: ",Object.isFrozen(person));


//keys of object a array of all keys
const key_array = Object.keys(person);
console.log("All keys: ",Object.keys(person));

//values of object a array of all values
const value_array = Object.values(person);
console.log("All values: ",value_array);

//object seal cannot delete keys like freeze
console.log("Is sealed",Object.isSealed(person));
Object.seal(person)
console.log("IS sealed: ",Object.isSealed(person));

