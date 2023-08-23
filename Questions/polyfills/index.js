// polyfills

const arr = [0,1,2,3,4,5,6,7,8,9];

// 1) forEach

arr.forEach((item) => console.log(item));

Array.prototype._forEach = function (callback) {
    // this = current/passed arr
    for (let i=0; i<this.length; i++) {
        callback(this[i]);
    }
}

arr._forEach((item) => console.log(item));

// 2) map

console.log(arr.map((item) => item + 100));

Array.prototype._map = function (callback) {
    let result = [];
    for (let i=0; i<this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}

console.log(arr._map((item) => item + 100));

// 3) reduce

console.log(arr.reduce((acc, item) => acc + item, 0));

Array.prototype._reduce = function (callback, initialValue) {
    let accumulator = initialValue ?? 0;
    for (let i=0; i<this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

console.log(arr._reduce((acc, item) => acc + item, 0));