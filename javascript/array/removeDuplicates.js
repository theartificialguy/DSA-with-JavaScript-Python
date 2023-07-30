// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// remove duplicates (inplace) from sorted array (non-decreasing array)
// [1,1,2], o/p = 2, 1st 2 (k) shud be [1,2]
// [0,0,1,1,1,2,2,3,3,4], o/p = 5, 1st 5 (k) shud be [0,1,2,3,4]
// [-3,-1,0,0,0,3,3], o/p = 4, [-3,-1,0,3]

function removeDuplicates_brute(nums) {
    // TC: O(nlogn)
    // SC: O(1)
    let k = 1;
    const size = nums.length;
    for (let i=0; i<size-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] = undefined; // replcae current as we need next item to compare with the next...
        } else {
            k += 1;
        }
    }
    nums.sort((a,b) => a-b);
    return k;
}

console.log(removeDuplicates_brute([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates_brute([1,1,2]));
console.log(removeDuplicates_brute([-3,-1,0,0,0,3,3]));

function removeDuplicates_optimized(nums) {
    // https://youtu.be/iCaDhMEhmz0
    // TC: O(n)
    // SC: O(1)
    const size = nums.length;
    if (size <= 1) return nums;
    let k = 0;
    for (let i=1; i<size; i++) {
        if (nums[k] !== nums[i]) {
            k += 1;
            nums[k] = nums[i];
        }
    }
    return k+1;
}

console.log(removeDuplicates_optimized([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates_optimized([1,1,2]));
console.log(removeDuplicates_optimized([-3,-1,0,0,0,3,3]));