// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function firstAndLast(nums, target) {
    // TC: O(logn) ; SC: O(1)
    // find the element
    let s = 0;
    let e = nums.length - 1;
    let targetIndex = -1;
    while (s <= e) {
        let mid = Math.floor((s+e)/2);
        if (nums[mid] === target) {
            targetIndex = mid;
            break;
        } else if (nums[mid] < target) s = mid + 1;
        else e = mid - 1;
    };
    if (targetIndex === -1) return [-1, -1];

    // find lower bound
    let lower = -1;
    s = 0;
    e = targetIndex - 1;
    while (s <= e) {
        let mid = Math.floor((s+e)/2);
        if (nums[mid] === target) {
            lower = mid;
            e = e - 1;
        }
        else if (nums[mid] < target) s = mid + 1;
        else e = mid - 1;
    };
    
    // find upper bound
    let upper = -1;
    s = targetIndex + 1;
    e = nums.length - 1;
    while (s <= e) {
        let mid = Math.floor((s+e)/2);
        if (nums[mid] === target) {
            upper = mid;
            s = s + 1;
        } else if (nums[mid] < target) s = mid + 1;
        else e = mid - 1;
    };
    
    upper = upper === -1 ? targetIndex : upper;
    lower = lower === -1 ? targetIndex : lower;

    return [lower, upper]
};

console.log(firstAndLast([1,2,3,3,3,4,5,6], 3)) // [2,4]
console.log(firstAndLast([5,7,7,8,8,10], 8)) // [3,4]
console.log(firstAndLast([5,7,7,8,8,10], 6)) // [-1,-1]
console.log(firstAndLast([], 0)) // [-1,-1]