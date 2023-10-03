// binary search - O(logn) - requires sorted array
// O(logn) - divides arr in half (i/p = n, o/p = n/2)

function binarSearch_iterative(arr, item) {
    let start = 0;
    let end = arr.length-1;
    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        if (arr[mid] === item) return mid;
        else if (arr[mid] < item) start = mid + 1;
        else end = mid - 1;
    };
    return -1;
};

console.log(binarSearch_iterative([1,2,3,4], 6));

function binarySearch_recursive(arr, start, end, item) {
    if (start <= end) {
        let mid = Math.floor((start+end)/2);
        if (arr[mid] === item) return mid;
        else if (arr[mid] < item) {
            return binarySearch_recursive(arr, mid+1, end, item);
        } else {
            return binarySearch_recursive(arr, start, mid-1, item);
        };   
    } else return -1;
};

console.log(binarySearch_recursive([1,2,3,4,5], 0, 4, 5));