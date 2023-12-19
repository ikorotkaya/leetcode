var isPalindrome = function (string) {
  string = string.toLowerCase();
  string = string.replace(/[^A-Za-z0-9]/g, "");

  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) return false;
    startIndex++;
    endIndex--;
  }

  return true;
};
