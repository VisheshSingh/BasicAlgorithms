/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
  var array = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  str = longestWord;
  return str.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
