var strStr = function (s1, s2) {
  for (let i = 0; i <= s1.length - s2.length; i++) {
    let str = "";
    for (let j = i; j < i + s2.length; j++) {
      str += s1[j];
    }

    if (str == s2) {
      console.log("match", i);
      return i;
    }
  }
  return -1;
};

strStr("sadbutsad", "but");
