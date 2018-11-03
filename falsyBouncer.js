/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var holderArray = arr.filter(removeFalsy);

  return holderArray;
}

function removeFalsy(value) {
  return Boolean(value);
}

console.log(bouncer([7, "ate", "", false, 9]));
