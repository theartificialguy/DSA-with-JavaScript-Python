def linear_search(arr, item):
	for i in range(len(arr)):
		if arr[i] == item:
			return i
	return -1