// Given a number, find the sum of all the prime numbers that are less than a given number
// e.g. 10 should return 17 because 2 + 3 + 5 + 7 = 17

function allPrimes(num) {
  let total = 0;

  function checkPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(allPrimes(10));
console.log(allPrimes(100));
