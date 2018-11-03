/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var holderArray = [];
  var count = 0;

  while (count < arr.length) {
    holderArray.push(arr.slice(count, count + size));
    count = count + size;
  }
  return holderArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
