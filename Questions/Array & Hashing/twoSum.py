nums1, target1 = [2,7,11,15], 9 # [0,1]
nums2, target2 = [3,2,4], 6 # [1,2]
nums3, target3 = [3,3], 6 # [0,1]

def twoSum(nums, target): # 69ms
    hash_map = {} # SC - O(n)
    for i in range(len(nums)): # TC - O(n)
        f = target - nums[i] # 9-2 = 7 => 7+2=9
        if f in hash_map:
            return [hash_map[f], i] # returning indices
        else:
            hash_map[nums[i]] = i # store index
    return [None, None]
    
print(twoSum(nums1, target1))
print(twoSum(nums2, target2))
print(twoSum(nums3, target3))