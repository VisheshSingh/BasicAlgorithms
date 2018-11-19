// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function TwoSum(arr, sum) {
  const pairs = [],
    store = [];

  for (let item of arr) {
    let item2 = sum - item;
    if (store.indexOf(item2) !== -1) {
      pairs.push([item, item2]);
    }
    store.push(item);
  }
  return pairs;
}

console.log(TwoSum([1, 2, 2, 3, 4], 4));
