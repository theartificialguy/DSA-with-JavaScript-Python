// second largest number in an array
// print 2nd largest distinct element from an array
// [12,35,1,10,34,1], o/p = 34
// [10,5,10], o/p = 5

// assuming -> positive nums only
function secondLargest(nums) {
    // TC: O(n)
    // SC: O(1)
    // first find max
    let largest = -1;
    let second_largest = -1;
    for (let i=0; i<nums.length; i++) {
        // find largest
        if (nums[i] > largest) {
            largest = nums[i];
        }
        // find second largest
        if (nums[i] < largest && nums[i] >= second_largest) {
            second_largest = nums[i];
        }
    }
    // find second
    // let second_largest = -1;
    // for (let i=0; i<nums.length; i++) {
    //     if (nums[i] < largest && nums[i] >= second_largest) {
    //         second_largest = nums[i];
    //     }
    // }
    return second_largest;
}

console.log(secondLargest([12,35,1,10,34,1])); // 34
console.log(secondLargest([10,5,10])); // 5