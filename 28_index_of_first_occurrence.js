// Find the Index of the First Occurrence in a String

var strStr = function (s1, s2) {
  if (!s2.length) return 0;
  if (!s1.includes(s2)) return -1;

  // If s2 is found in s1, use the split method to separate s1 into an array based on occurrences of s2. 
  // Then, return the length of the first element in the resulting array, which represents the index of the first occurrence of s2 in s1.
  return s1.split(s2)[0].length
};