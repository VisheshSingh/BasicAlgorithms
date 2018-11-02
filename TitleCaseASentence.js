/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  var holderArray = str.split(" ");
  for (var i = 0; i < holderArray.length; i++) {
    var placeholder = holderArray[i];
    var upChar = placeholder.charAt(0).toUpperCase();

    placeholder = placeholder.slice(1).toLowerCase();
    holderArray[i] = upChar.concat(placeholder);
  }
  str = holderArray.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
