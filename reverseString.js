/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

// 1.
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// 2.
function reverseString2(str) {
  var revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

// 2.
function reverseString3(str) {
  var revString = "";
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

// 4.
function reverseString4(str) {
  var revString = "";
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}

// 5.
function reverseString5(str) {
  var revString = "";
  str.split("").forEach(element => {
    revString = element + revString;
  });
  return revString;
}

// 6.
function reverseString6(str) {
  return str.split("").reduce((revString, element) => element + revString, "");
}

console.log("1: ", reverseString("hello"));
console.log("2: ", reverseString2("hello"));
console.log("3: ", reverseString3("hello"));
console.log("4: ", reverseString4("hello"));
console.log("5: ", reverseString5("hello"));
console.log("6: ", reverseString6("hello"));
