const removeDuplicates = (nums) => {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); //[0,1,2,3,4]
