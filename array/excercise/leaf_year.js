function leaf_year_range(st_range,end_year){
  let year_range = [];
  for(let i = st_range; i <= end_year ;i++){
    year_range.push(i);
  }
  let new_array = [];
  year_range.forEach(
    function(year){
      // i will call the function to check leaf year
      if (test_LeafYear(year)){
        new_array.push(year);
      }
    }
  );
  return new_array;
}

function test_LeafYear(year){
  //check if the year is divisible by 4 but not divisible by 100,ot if it is divisible by 100 and 400.
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
    return year;
  }
  else{
    return false;
  }
}

console.log(leaf_year_range(2000,2013));
