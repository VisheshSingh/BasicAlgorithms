// Reverse the character in a word

function reverseWord(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseWord("i love javascript"));
