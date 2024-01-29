function find_duplicates(arr) {
  let obj = {};
  let ans = [];

  arr.forEach(element => {
    if (!obj[element]) {
      obj[element] = 0;
    }
    obj[element] += 1;
  });

  for (let i in obj) {
    if (obj[i] >= 2) {
      ans.push(parseInt(i)); // Convert 'i' to an integer before pushing to the result array
    }
  }

  return ans;
}

console.log(find_duplicates([1, 2, 3, 4, 45, 5, 34, 3, 32, 3, 2, 22, 22, 2]));
