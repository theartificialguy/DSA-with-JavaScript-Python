// https://leetcode.com/problems/3sum/
// 3sum -> i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Input: nums = [0,1,1]
// Output: []
// Input: nums = [0,0,0]
// Output: [[0,0,0]]

function threeSumBrute(nums) {
    // TC: O(n^3)
    // SC: O(n)
    const result = new Set();
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                if (nums[i]+nums[j]+nums[k] === 0) {
                    const triplet = [nums[i],nums[j],nums[k]];
                    // set only adds unique element
                    result.add(JSON.stringify(triplet.sort()));
                }
            }
        }
    }
    return Array.from(result).map(item => JSON.parse(item));
}

console.log(threeSumBrute([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSumBrute([0,1,1])); // []
console.log(threeSumBrute([0,0,0])); // [[0,0,0]]
console.log(threeSumBrute([-2,0,0,2,2])) // [[-2,0,2]]

function threeSumBetter(nums) {
    // https://www.youtube.com/watch?v=DhFh8Kw7ymk
    // TC: O(n^2)
    // SC: O(n)
    // hashing (need to remove 3rd loop to make O(n^2))
    // nums[i]+nums[j]+nums[k] = 0 ; nums[k] = -(nums[i]+nums[j])
    const result = new Set();
    const hash_set = new Set();
    for (let i=0; i<nums.length; i++) {
        for (j=i+1; j<nums.length; j++) {
            const third = - (nums[i] + nums[j]);
            if (hash_set.has(third)) {
                result.add(JSON.stringify([nums[i],nums[j],third].sort())) 
            }
            // keep pushing jth item (items b/w i & k) in hash set
            hash_set.add(nums[j]);
        }
        hash_set.clear();
    }
    return Array.from(result).map(item => JSON.parse(item));
}

console.log(threeSumBetter([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSumBetter([0,1,1])); // []
console.log(threeSumBetter([0,0,0])); // [[0,0,0]]
console.log(threeSumBetter([-2,0,0,2,2])) // [[-2,0,2]]

function threeSumOptimal(nums) {
    // https://www.youtube.com/watch?v=DhFh8Kw7ymk
    // idea:- get rid of set ds
    // 1) sort the arr
    // 2) fix i, put j just after i, & k always at end, sum of 3 = 0
    // keep skipping the same item while maintaining sorted order i.e. j & k shudn't cross eachother i.e. while (__ && j < k) -> ensures no duplicate triplets
    // [-2,-2,-2,-1,-1,-1,0,0,0,2,2,2]
    // TC: O(n^2)
    // SC: O(n_triplets)
    nums.sort((a,b) => a-b);
    const result=[];
    for (let i=0; i<nums.length; i++) {
        if (i>0 && nums[i] === nums[i-1]) continue;
        let j=i+1;
        let k=nums.length-1;
        while (j<k) {
            const triplet = [nums[i],nums[j],nums[k]];
            const triplet_sum = nums[i]+nums[j]+nums[k];
            if (triplet_sum < 0) {
                j+=1;
            } else if (triplet_sum > 0) {
                k-=1;
            } else {
                result.push(triplet);
                j+=1;
                k-=1;
                while (j<k && nums[j]===nums[j-1]) j+=1;
                while (j<k && nums[k]===nums[k+1]) k-=1;
            }
        }
    }
    return result;
}

console.log(threeSumOptimal([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSumOptimal([0,1,1])); // []
console.log(threeSumOptimal([0,0,0])); // [[0,0,0]]
console.log(threeSumOptimal([-2,0,0,2,2])) // [[-2,0,2]]


