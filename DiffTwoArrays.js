/* Compare two arrays and return a new array with any items only found in one of the original arrays */

function DiffTwoArrays(arr1, arr2) {
  let holderArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      holderArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      holderArr.push(arr2[i]);
    }
  }
  return holderArr;
}

console.log(DiffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 50]));
