inp1 = [1,2,3,1] # true
inp2 = [1,2,3,4] # false
inp3 = [1,1,1,3,3,4,3,2,4,2] # true
inp4 = [3,3] # true

######################################################### O(nlogn), O(1) #########################################################
def containsDuplicate_1(nums): # 590ms
	nums.sort() # inplace sorting - faster -> O(nlogn)
	for i in range(len(nums)-1): # O(n)
		if nums[i] == nums[i+1]:
			return True
	# TC -> O(nlogn) + O(n) -> O(nlogn)
	return False

######################################################### O(n), O(n) #########################################################
def containsDuplicate_2(nums): # 530ms
	hash_set = set() # SC - O(n)
	for i in range(len(nums)): # TC - O(n)
		if nums[i] not in hash_set:
			hash_set.add(nums[i])
		else:
			return True
	return False