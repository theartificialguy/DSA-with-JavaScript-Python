// search in 2D matrix (binary search)
// https://leetcode.com/problems/search-a-2d-matrix/

function search_brute(matrix, target) {
    // TC: O(m*n)
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[0].length; col++) {
            if (target === matrix[row][col]) return true;
        };
    };
    return false;
};

function search_opt(matrix, target) {
    // TC: O(log(m*n))
    let rows = matrix.length;
    let cols = matrix[0].length;
    let totalElements = rows * cols;
    // hypothetically imagine 1D arr of given 2D matrix
    // row = i / cols; col = i % cols
    let l = 0;
    let r = totalElements - 1;
    while (l <= r) {
        let mid = Math.floor((l+r)/2);
        // convert 1D mid to 2D mid coord
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        if (target > matrix[row][col]) l = mid + 1;
        else if (target < matrix[row][col]) r = mid - 1;
        else return true;
    };
    return false;
};

console.log(search_opt(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    3,
));
console.log(search_opt(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    13,
));
console.log(search_opt(
    [[1]],
    0,
));
console.log(search_opt(
    [[1],[3]],
    1,
));