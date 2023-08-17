// sliding window maximum
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

function slidingWindowMax_brute(nums, k) {
    if (k === 1) return nums;
    let result = [];
    for (let i=0; i<=nums.length-k; i++) {
        let curr_max = nums[i];
        for (let j=i; j<i+k; j++) {
            if (nums[j] > curr_max) curr_max = nums[j];
        }
        result.push(curr_max);
    }
    return result;
}

console.log(slidingWindowMax_brute([1,3,-1,-3,5,3,6,7], 3))
console.log(slidingWindowMax_brute([2,5,1,8,2,9,1], 3))

function slidingWindowMax_opt(nums, k) {
    // previous k-1 items remains the same and
    // 1 new item gets added in window at a time
    // i.e. compare prev window max with newly added item
    let size = nums.length;
    let i = 0;
    let j = 0;
    // let sum = [];
    let max_sum = 0;
    let curr_sum = 0;
    while (i <= size-k) {
        if (j === i+k) {
            // window reset condition
            ++i;
            j = i;
            // sum.push(curr_sum);
            // if (curr_sum > max_sum) max_sum = curr_sum;
            max_sum = Math.max(max_sum, curr_sum);
            curr_sum -= nums[i-1]; // excluding prev
            curr_sum += nums[i+k-1]; // including next
        }
        else {
            // only calc sum for 1st window
            if (i < 1) curr_sum += nums[j];
            // ietrating window
            j += 1;
        };
    }
    return max_sum;
}

console.log(slidingWindowMax_opt([1,3,-1,-3,5,3,6,7], 3)) // [3,-1,1,5,14,16]
console.log(slidingWindowMax_opt([2,5,1,8,2,9,1], 3)) // [8,14,11,19,12]