/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  // repeat after me
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(str);
  }
  str = arr.join("");
  return str;
}

console.log(repeatStringNumTimes("abc", 3));
