var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  const firstWord = strs[0];

  if (firstWord === "" || strs.length === 1) {
    return firstWord;
  }

  let prefix = "";
  let i = 0;

  while (i < firstWord.length) {
    const char = firstWord.charAt(i);

    if (strs.every(str => str.charAt(i) === char)) {
      prefix += char;
      i++;
    } else {
      break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["cava", "cav"])) //"cav"
