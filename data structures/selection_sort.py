def selection_sort(arr):
	for i in range(len(arr)-1):
		_min = i
		for j in range(i+1, len(arr)):
			if arr[j] < arr[_min]:
				_min = j
		arr[i], arr[_min] = arr[_min], arr[i]
	return arr

arr = [9, 5, 4, 1, 3]
print(selection_sort(arr))