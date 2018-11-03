// Given an array of integers, return an array with sum of even integers and odd integers

function SumOfEvenOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}

console.log(SumOfEvenOdd([50, 71, 60, 73]));
