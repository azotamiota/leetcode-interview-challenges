/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // nums1.sort((a, b) => a - b)
    // nums2.sort((a, b) => a - b)
  const [smallerArr, longerArr,] = [nums1.length < nums2.length ? nums1 : nums2, nums1.length < nums2.length ? nums2 : nums1]
  return smallerArr.filter(elem => {
    if (longerArr.indexOf(elem) !== -1) {
        longerArr.splice(longerArr.indexOf(elem), 1);
        return true
    }
  })
};
