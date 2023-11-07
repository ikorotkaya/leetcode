var isValid = function (s) {
  if (s.length % 2 !== 0 || s.length < 2) {
    return false;
  }

  const matchingPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in matchingPairs) {
      stack.push(char);
    } else {
      if (matchingPairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // After processing the entire string, the stack should be empty if all parentheses are balanced.
  return stack.length === 0;
};