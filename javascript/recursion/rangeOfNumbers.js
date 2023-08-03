// range of numbers
// start=1,end=5 -> o/p = [1,2,3,4,5]

function createArray(start, end) {
    let arr = [];
    return _createArrayHelper(start, end, arr);
}

function _createArrayHelper(start, end, arr) {
    if (end === start) {
        arr.push(end);
        return arr;
    }
    arr.push(start)
    return _createArrayHelper(start+1, end, arr);
}

console.log(createArray(1,5))