// Return the sum of all number within a range
// e.g. sumAll([1,4]) == 10

function sumAll(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
