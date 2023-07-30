// rotate array to right by k non-neg steps.
// [1,2,3,4,5,6,7], k=3 - o/p = [5,6,7,1,2,3,4]
// [-1,-100,3,99], k=2 - o/p = [3,99,-1,-100]
// [1,2], k=3 - o/p = [2,1]
// [-1], k=2 - o/p = [-1]

function rotateByK_brute(nums, k) {
    const size = nums.length;
    if (k > size) {
        k = k % size; // 10 % 8 => 2
    }
    const last_k_items = nums.splice(size-k, k)
    nums.unshift(...last_k_items);
    return nums
}

console.log(rotateByK_brute([1,2,3,4,5,6,7], 3))
console.log(rotateByK_brute([-1,-100,3,99], 2))
console.log(rotateByK_brute([1,2], 3))
console.log(rotateByK_brute([-1], 2))

function rotateByK_optimized(nums, k) {
    // TC: O(n)
    // SC: O(1) -> inplace operations
    const size = nums.length;
    if (k > size) {
        k = k % size; // 10 % 8 => 2
    }
    // reverse whole arr
    reverse(nums, 0, size-1); // O(n)
    // reverse first k
    reverse(nums, 0, k-1); // O(k)
    // reverse all items after k
    reverse(nums, k, size-1); // O(size-k)
    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

console.log(rotateByK_optimized([1,2,3,4,5,6,7], 3))
console.log(rotateByK_optimized([-1,-100,3,99], 2))
console.log(rotateByK_optimized([1,2], 3))
console.log(rotateByK_optimized([-1], 2))