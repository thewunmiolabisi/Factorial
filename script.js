
function calculateFact(number) {
  if (number < 1) {
    return "factorial";
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

const number = 6;
console.log(`The factorial of ${number} is: ${calculateFact(number)}`);
