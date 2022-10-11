/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    const sortedNums = nums.sort((a, b) => a - b)
    return sortedNums.filter((elem, idx) => {
        return elem !== sortedNums[idx + 1] && elem !== sortedNums[idx - 1]     
    })[0]
};
