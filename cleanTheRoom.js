// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

function cleanTheRoom(arr) {
  var obj = {};
  arr
    .sort((a, b) => a - b)
    .forEach(item => {
      if (!obj[item]) {
        obj[item] = [item];
      } else {
        obj[item] = [...obj[item], item];
      }
    });

  return Object.values(obj).map(item => (item.length == 1 ? item[0] : item));
}

console.log(
  cleanTheRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20])
);
