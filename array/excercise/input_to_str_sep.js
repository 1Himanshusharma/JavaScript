// prompt the user for input and store it in the 'num' variable

var num = window.prompt();

//convert the number to a string and store it in the 'str'
var str = num.toString();

//Initialize an array 'result' with the first char of the string
var result = [str[0]];

//Iterating
for (var x = 1;x < str.length;x++){
  // check if the previous and current char are both even 
  if (str[x-1]%2 === 0 && str[x] % 2 === 0){
    //if both are even, push a '-'
    result.push('-',str[x]);
  }
  else{
    //if not both even, push the current char
    result.push(str[x]);
  }
}


//output
console.log(result.log(''));