// Take an array of arrays and flatten it to a single array
//e.g. [[1,2],[3,4],[5,6],[7]] should return [1,2,3,4,5,6,7]

// METHOD 1
function flattenArr1(arr) {
  return [].concat(...arr);
}

function flattenArr2(arr) {
  return [].concat.apply([], arr);
}

function flattenArr3(arr) {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
}

console.log(flattenArr1([[1, 2], [3, 4], [5, 6], [7]]));
console.log(flattenArr2([[1, 2], [3, 4], [5, 6], [7]]));
console.log(flattenArr3([[1, 2], [3, 4], [5, 6], [7]]));
