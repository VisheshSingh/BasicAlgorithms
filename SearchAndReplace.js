function searchReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  } else {
    str = str.replace(before, after);
  }

  return str;
}

console.log(
  searchReplace(
    "A quick brown fox jumped over the lazy dog",
    "jumped",
    "leaped"
  )
);

console.log(searchReplace("His name is Tom", "Tom", "john"));
