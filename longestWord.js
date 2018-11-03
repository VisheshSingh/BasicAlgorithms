// Given a sentence, return the longest word. If there is more than one then return an array of longest words

function longestWords(str) {
  // strip out any punctuations
  var wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  // sort array based on longest word
  var sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words are longest
  var longestArr = sorted.filter(word => {
    if (word.length == sorted[0].length) return true;
  });

  if (longestArr.length == 1) {
    return longestArr[0];
  } else {
    return longestArr;
  }
}

console.log(longestWords("hello there, hey home!"));
