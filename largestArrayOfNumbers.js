/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  // You can do this!
  var holderArray = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = Number.MIN_SAFE_INTEGER;
    for (var j = 0; j < arr.length; j++) {
      if (largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    holderArray.push(largestNumber);
  }
  return holderArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);
