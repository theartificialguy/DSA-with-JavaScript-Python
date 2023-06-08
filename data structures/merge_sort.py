def helper(arr1, arr2, original_arr):
	'''
	function: merge 2 sorted arrays
	arr1: [1, 3] # sorted
	arr2: [2, 4] # sorted
	output: [1, 2, 3, 4]
	'''
	i = j = k = 0
	
	while i < len(arr1) and j < len(arr2):
		if arr1[i] < arr2[j]:
			original_arr[k] = arr1[i]
			i += 1
		else:
			original_arr[k] = arr2[j]
			j += 1
		k += 1
	
	# append the remaining items of both arr1 & arr2 if any
	while i < len(arr1):
		original_arr[k] = arr1[i]
		i += 1
		k += 1

	while j < len(arr2):
		original_arr[k] = arr2[j]
		j += 1
		k += 1

	return
  
def merge_sort(arr):

	if len(arr) == 1:
		return arr
	else:
		mid = len(arr) // 2
		left_subarray = arr[:mid]
		right_subarray = arr[mid:]
		merge_sort(left_subarray)
		merge_sort(right_subarray)
		helper(left_subarray, right_subarray, arr)

arr = [2, 1, 5, 8, 9, 6, 7, 4]
merge_sort(arr)
print(arr)