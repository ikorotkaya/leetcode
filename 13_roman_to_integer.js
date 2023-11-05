var romanToInt = function(s) {
  let i = 0;
  let result = 0;

  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  while (i < s.length) {
    const currentNumber = symbolValues[s[i]];
    if (i + 1 === s.length) {
      return result + currentNumber;
    } else {
      const nextNumber = symbolValues[s[i+1]];
      if (currentNumber >= nextNumber) {
        result += currentNumber;
        i += 1;
      } else {
        result += nextNumber - currentNumber;
        i += 2;
      }
    }
  }

  return result;
};