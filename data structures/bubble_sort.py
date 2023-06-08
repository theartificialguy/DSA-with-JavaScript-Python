def bubble_sort(arr):
	for i in range(len(arr)-1):
		swaps = 0
		for j in range(len(arr)-1-i): # excluding last "i" element(s) after every pass as they are always sorted
			if arr[j] > arr[j+1]:
				# swap
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swaps = 1
		if swaps == 0: # arr was already sorted -> making it an adaptive sorting algo
			break
	return arr

arr = [9, 5, 4, 1, 3]
print(bubble_sort(arr))