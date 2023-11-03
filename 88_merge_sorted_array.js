var merge = function (nums1, m, nums2, n) {
  let i = m - 1; //nums1 length
  let j = n - 1; //nums2 length
  let k = m + n - 1; //merged array length

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
      console.log(nums1, nums2, i, j, k);
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
      console.log(nums1, nums2, i, j, k);
    }
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
    console.log(nums1, nums2, i, j, k);
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
    console.log(nums1, nums2, i, j, k);
  }

  return;
};

merge([1, 2, 7, 0, 0, 0], 3, [2, 5, 6], 3);
