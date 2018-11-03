// LETTER CHANGES
// Change every letter of a string to the that follows it
// If there is any vowels then capitalize it

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char == "z" || char == "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  return newStr;
}

console.log(letterChanges("Hello There"));
