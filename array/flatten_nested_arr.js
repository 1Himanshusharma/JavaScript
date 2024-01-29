let flatten = function(a, shallow, r) {
  // if the result array (r) is not provided, initialize it as an empty array
  if (!r) {
    r = [];
  }

  // if shallow is true, use concat.apply to flatten the array
  if (shallow) {
    return r.concat.apply(r, a);
  }

  // iterate through each element in the array
  for (let i = 0; i < a.length; i++) {
    // check if the current element is an array
    if (a[i].constructor == Array) {
      // recursively flatten nested arrays
      flatten(a[i], shallow, r);
    } else {
      r.push(a[i]);
    }
  }

  return r;
};

// Output the result of the flatten function with a nested array
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));

// Output the result of the flatten function with a nested array using shallow flattening
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
