// Given a number, return an array of prime number let then the given number;

function totalPrimes(num) {
  let total = [];

  function checkPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      total.push(i);
    }
  }
  return total;
}

console.log(totalPrimes(50));
