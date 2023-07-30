// two sum
// given: arr:number[], target:number
// output: [0, 1] = target i.e. return indices of 2 nums = target

function twoSum(arr, target) {
    // TC: O(n)
    // SC: O(n)
    cache = {}
    for (let i=0; i<arr.length; i++) {
        f = target - arr[i];
        if (cache.hasOwnProperty(f)) {
            return [cache[f], i]
        }
        cache[arr[i]] = i
    }
}

arr1 = [2,7,11,15]
arr2 = [3,2,4]

console.log(twoSum(arr1, 9))
console.log(twoSum(arr2, 6))