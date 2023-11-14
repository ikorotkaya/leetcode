var plusOne = function (digits) {
  let output = []
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      break;
    }
  }
  if (digits[0] === 0) {
    output.push(1, ...digits);
  } else {
    output = digits;
  }
  return output
};

plusOne([1, 2, 3]) // [1,2,4]   