// https://leetcode.com/problems/longest-consecutive-sequence/
// longest consecutive sequence
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Input: nums = [1,2,0,1]
// Output: 3

const longestConsecutiveBrute = function(nums) {
    if(nums.length < 1) return 0

    let max = 1
    let count = 1
    const sorted = nums.sort((a, b) => a - b);
    
    for(let i = 0; i < sorted.length; i++){

        // if we see a duplicate in array go to last entry in sequence 
        // with same values
        if(sorted[i] === sorted[i + 1]) continue

        // if next entry in array is consecutive, add to count 
        if(sorted[i] === sorted[i + 1] - 1 ){
            count++
            max = Math.max(count, max) 
        } 
        // if next entry in array is not consectutive, reset count
        else {
            count = 1
        }
    }

    return max
};

function longestConsecutiveSequence(nums) {
    // https://www.youtube.com/watch?v=P6RZZMu_maU
    // if item doesn't have a left neighbor (item-1) in set, i.e. start a new seq
    // if yes, get that seq, keep pushing (item+1) if present in set
    const num_set = new Set(nums)
    let longest_seq_len = 0;
    for (let i=0; i<nums.length; i++) {
        // check if its the start of a seq
        if (!num_set.has(nums[i]-1)) {
            let current_seq_len = 0
            // keep checking while nums[i]+1 exists in num_set
            while (num_set.has(nums[i] + current_seq_len)) {
                current_seq_len += 1;
            }
            longest_seq_len = Math.max(longest_seq_len, current_seq_len);
        }
    }
    return longest_seq_len;
}

console.log(longestConsecutiveSequence([])); // 0
console.log(longestConsecutiveSequence([1,2,0,1])); // 3
console.log(longestConsecutiveSequence([100,4,200,1,3,2])); // 4
console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1])); // 9