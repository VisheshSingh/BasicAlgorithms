// Check if a string is anagram or not

function anagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

console.log(anagram("dirty room#$", "Dormitory"));
