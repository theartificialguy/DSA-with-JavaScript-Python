// two sum II :- 1-indexed array of integers
// numbers = [2,7,11,15], target = 9, output = [1,2]

function twoSumBrute(nums, target) {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] +nums[j] === target) {
                return [i+1, j+1];
            }
        }
    }
}

console.log(twoSumBrute([2,7,11,15], 9));
console.log(twoSumBrute([2,3,4], 6));
console.log(twoSumBrute([-1,0], -1));

function twoSumTwoPointer(numbers, target) {
    // if sum of both nums is less than target, then you should incre start pointer
    // if greater than target, decr end pointer
    // hence, taking advantage of sorted array
    let i=0;
    let j=numbers.length-1;
    while (i<j) {
        if (numbers[i] + numbers[j] === target) {
            return [i+1, j+1];
        } else if (numbers[i] + numbers[j] < target) {
            i += 1;
        } else {
            j -= 1;
        }
    };
}

console.log(twoSumTwoPointer([2,7,11,15], 9));
console.log(twoSumTwoPointer([2,3,4], 6));
console.log(twoSumTwoPointer([-1,0], -1));