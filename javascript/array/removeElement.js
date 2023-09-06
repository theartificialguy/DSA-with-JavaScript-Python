// https://leetcode.com/problems/remove-element

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

function removeElementBrute(nums, val) {
    // O(n)
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = undefined;
        }
    }
    // O(nlogn)
    nums.sort();
    let k = 0;
    // O(n)
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== undefined) k += 1;
    }
    return k;
}

console.log(removeElementBrute([3,2,2,3], 3));
console.log(removeElementBrute([0,1,2,2,3,0,4,2], 2));

function removeElementOpt(nums, val) {
    // O(n)
    // when nums[k] becomes = val, find nums[i] which is != val and swap with nums[k], after swap, increment k, assign i at k to reset i position in order to search for nums[i] != val
    let k = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[k] !== val) k++;
        else if (nums[k] === val && nums[i] !== val) {
            // swap
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            // increment k & assign k to i
            k++;
            i = k;
        };
        i++;
    };
    return k;
};

console.log(removeElementOpt([3,2,2,3], 3));
console.log(removeElementOpt([0,1,2,2,3,0,4,2], 2));