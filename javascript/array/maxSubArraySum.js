// https://leetcode.com/problems/maximum-subarray/submissions/
// maximum subarray sum (continous)
// [-2,1,-3,4,-1,2,1,-5,4], o/p = 6 - [4,-1,2,1]
// [1], o/p = 1 - [1]
// [5,4,-1,7,8], o/p = 23 - [5,4,-1,7,8]
// [-2,1], o/p = 1 - [1]

function maxSubArraySum_brute(nums) {
    // TC: O(n^2)
    // SC: O(1)
    if (nums.length <= 1) return nums[0];
    let max_sum = nums[0];
    let start = 0;
    let end = 0;
    for (let i=0; i<nums.length; i++) {
        let curr_sum = 0;
        for (let j=i; j<nums.length; j++) {
            curr_sum += nums[j];
            if (curr_sum > max_sum) {
                max_sum = curr_sum;
                start = i;
                end = j;
            }
        }
    }
    return {
        max_sum,
        subarray: nums.slice(start, end+1),
    };
}

console.log(maxSubArraySum_brute([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArraySum_brute([1])) // 1
console.log(maxSubArraySum_brute([5,4,-1,7,8])) // 23
console.log(maxSubArraySum_brute([-2,1])) // 1

function maxSubArraySum_kadanes(nums) {
    // TC: O(n)
    // SC: O(1)
    let max_sum = nums[0]; // can't be 0 as we can have -ve values in arr
    let curr_sum = 0;
    // remove -ve prefix from our curr sum to maintain max sum
    for (let i=0; i<nums.length; i++) {
        if (curr_sum < 0) curr_sum = 0;
        curr_sum += nums[i];
        max_sum = Math.max(max_sum, curr_sum);
    }
    return max_sum;
}

console.log(maxSubArraySum_kadanes([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArraySum_kadanes([1])) // 1
console.log(maxSubArraySum_kadanes([5,4,-1,7,8])) // 23
console.log(maxSubArraySum_kadanes([-2,1])) // 1