// SORT BY HEIGHT
// SOme people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange all those people by height in ascending order without moving the trees.
// a = [-1, 150, 190, 170, -1, -1, 190, 180]
// sortByHeight(a) == [-1, 150, 170, 180, -1, -1, 190, 190]

function sortByHeight(arr) {
  let arr1 = [];
  let arr2 = [];

  arr.forEach((val, index) => {
    if (val === -1) {
      arr1.push(index);
    } else {
      arr2.push(val);
    }
  });
  const sortedArr = arr2.sort((a, b) => a - b);
  arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));

  return sortedArr;
}

const a = [-1, 150, 190, 170, -1, -1, 190, 180];
console.log(sortByHeight(a));
