// Return the character that is most common in the string
//  e.g 'javascript' should return 'a'

function maxCharacter(str) {
  var charMap = {};
  var maxChar = "";
  var maxNum = 0;

  str.split("").forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxCharacter("javascript"));
