/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  // &colon;&rpar;
  var placeholder = str.split("");

  for (let i = 0; i < placeholder.length; i++) {
    switch (placeholder[i]) {
      case "&":
        placeholder[i] = "&amp;";
        break;
      case "<":
        placeholder[i] = "&lt;";
        break;
      case ">":
        placeholder[i] = "&gt;";
        break;
      case '"':
        placeholder[i] = "&quot;";
        break;
      case "'":
        placeholder[i] = "&apos;";
        break;
    }
  }
  str = placeholder.join("");
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
