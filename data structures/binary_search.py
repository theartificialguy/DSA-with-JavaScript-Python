def binary_search(arr, item):
	# arr should be sorted

	first = 0
	last = len(arr)-1

	while first <= last:
		mid = (first + last) // 2 # int
		if item == arr[mid]:
			return mid
		elif item > arr[mid]:
			first = mid + 1
		else:
			last = mid - 1

def binary_search_recurrsion(arr, low, high, item):
	if low <= high:
		mid = (low + high) // 2
		if item == arr[mid]:
			return mid
		elif item > arr[mid]:
			return binary_search_recurrsion(arr, mid+1, high, item)
		else:
			return binary_search_recurrsion(arr, low, mid-1, item)
	else:
		return -1


inp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
print(binary_search(inp, 7))
print(binary_search_recurrsion(inp, 0, len(inp)-1, 7))

