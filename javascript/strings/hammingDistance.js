// hamming strings
// given 2 strings, return their hamming distance
// x="hello",y="hrllw", o/p=2

function hammingDistanceStr(x, y) {
    if (x.length !== y.length) return;
    let distance = 0;
    for (let i=0; i<x.length; i++) {
        if (x[i] !== y[i]) distance += 1;
    }
    return distance;
}

console.log(hammingDistanceStr("hello", "hrllw"));

// hamming distance
// https://leetcode.com/problems/hamming-distance/
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//       ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
function hammingDistanceInt(x, y) {
    // convert to binary
    x = x.toString(2);
    y = y.toString(2);
    // if any is less than 4 bits, add 00 (pre)
    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
        }
    } else {
        while (x.length !== y.length) {
            y = "0" + y;
        }
    }
    let distance = 0;
    for (let i=0; i<x.length; i++) {
        if (x[i] !== y[i]) distance += 1;
    }
    return distance;
}

console.log(hammingDistanceInt(3, 1))