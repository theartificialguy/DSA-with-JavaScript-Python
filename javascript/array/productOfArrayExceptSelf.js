// product of array except self
// https://leetcode.com/problems/product-of-array-except-self/

const nums1 = [1,2,3,4]; // [24,12,8,6]
const nums2 = [-1,1,0,-3,3]; // [0,0,9,0,0]

// =================================== OPTIMIZED SOLUTION ===================================

// TC:- 107 ms - O(n)
// SC:- 59 MB - O(n)

function solution_optimized(nums) {
    let result = [];
    const asc = calculateAscRunningProducts(nums);
    const desc = calculateDescRunningProducts(nums);
    for (let i=0; i<nums.length; i++) {
        result.push(asc[i-1] * desc[i+1]);
    }
    return result;
}

function calculateAscRunningProducts(nums) {
    let cache = [];
    for (let i=0; i<nums.length; i++) {
        cache[i] = nums[i] * (cache[i-1] ?? 1 );
    }
    return cache;
}

function calculateDescRunningProducts(nums) {
    let cache = [];
    for (let i=nums.length-1; i>=0; i--) {
        cache[i] = nums[i]*(cache[i+1] ?? 1);
    }
    return cache;
}

// =================================== BRUTE FORCE SOLUTION ===================================

// TC:- 6535 ms - O(n^2)
// SC:- 52 MB - O(n)

function solution_brute(nums) {
    let result = [];
    for (let i=0; i<nums.length; i++) {
        let [leftProduct, rightProduct] = helper(nums, i-1, i+1);
        if (leftProduct === 0 || rightProduct === 0) {
            result.push(0);
        } else {
            result.push(leftProduct * rightProduct);   
        }
    }
    return result;
}

function helper(nums, left, right) {
    let leftProduct = 1;
    let rightProduct = 1;
    // iterate left sub-array
    while (left >= 0) {
        leftProduct *= nums[left];
        left -= 1;
    }
    // iterate right sub-array
    while (right < nums.length) {
        rightProduct *= nums[right];
        right += 1;
    }
    return [leftProduct, rightProduct];
}

console.log(solution_brute(nums1));
console.log(solution_brute(nums2));