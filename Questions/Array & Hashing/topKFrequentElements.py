nums1, k1 = [1,1,1,2,2,3], 2 # [1,2]
nums2, k2 = [1], 1 # [1]

def topKFrequentElements(nums, k): # 117ms
    # TC - O(nlogn)
    # SC - O(n)
    hash_map = {}
    for num in nums: # O(n)
        if num in hash_map:
            hash_map[num] += 1
        else:
            hash_map[num] = 1
    hash_map = sorted(hash_map.items(),key=lambda x:x[1],reverse=True) # O(nlogn)
    top_k = []
    for i in range(k): # O(n)
        top_k.append(hash_map[i][0])
    return top_k
    
print(topKFrequentElements(nums2, k2))