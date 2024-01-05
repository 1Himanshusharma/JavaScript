let a = 5;
let b = "5";


let cond1 = a == b;
let cond2 = ( a === b);
console.log(cond1 || cond2); // false true
console.log(cond1 && cond2);
console.log(!(cond1 && cond2));