var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
};

// var removeElement = function(nums, val) {
//   let result = nums.filter(num => num !== val);
//   console.log(result);
// };

removeElement([0,1,2,2,3,0,4,2], 2);