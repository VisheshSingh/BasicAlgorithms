// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// e.g.seekAndDestroy([2,3,4,6,4,6, 'hello'], 2,4,6)

function seekAndDestroy1(arr) {
  var args = Array.prototype.slice.call(arguments);

  function filterArr(arr) {
    return args.indexOf(arr) == -1;
  }

  return arr.filter(filterArr);
}

function seekAndDestroy2(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy1([2, 3, 4, 6, 4, 6, "hello"], 2, 4, 6));
console.log(seekAndDestroy2([2, 3, 4, 6, 4, 6, "hello"], 4, 6));
