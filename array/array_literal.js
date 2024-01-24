// this is very simple method in javascript
// to crate array using literal
let fruits = ['apple','banana','orange'];
console.log(fruits);  // [ 'apple', 'banana', 'orange

let my_name_in_array = ['My','Name','is','himanshu','sharma'];
console.log(my_name_in_array);

// this is very simplest way to declare array in javascript



//excercise
//create array using array literal of all objects that you can see around you
let obj = ['blankit','bed','chair','laptop','shoes','shocks','gate'];
//and so on
// is not it hard to declare large amount
console.log(obj);
console.log(obj.entries())



//slicing
console.log(obj.slice(2,5))

let other_obj = ['hello','world'];
console.log(other_obj.slice(-1));   // will print last element i.
// the neagtie index also does work
// n javascript not in c++


// now concate those two array
let final_arr = obj.concat(other_obj);
console.log(final_arr);


// reversing the array
final_arr.reverse();
console.log(final_arr)


// if we wanna access the element in array with using of index
console.log(final_arr[4]);
console.log(final_arr.at(4));

//constructor return the property by which array was crated
let con = final_arr.constructor;
console.log(con);

// copy within does not add the value to the array
// it is used to change the postinons
final_arr.copyWithin(0,1,3);
console.log(final_arr)

//entries of the array
let f = final_arr.entries();

for (let x of f){
  console.log(x[0]+" : "+x[1])
}

// filling
let f_array = final_arr.fill('hello',0,3);
console.log(f_array);


//findindex
//find
//filer
// finalast
//flat

// return string with 

let text = final_arr.join(" and ");
console.log(text);