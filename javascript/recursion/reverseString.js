// reverse a string using recursion

// 1) using normal loop
function reverseLoop(s) {
    let new_s = "";
    for (let i=s.length-1; i>=0; i--) {
        new_s += s[i];
    }
    return new_s;
}

console.log(reverseLoop("hello"))

// 2) using recursion
function reverseRecursive(s) {
    return __reverseRecursiveHelper(s, s.length-1)
}

function __reverseRecursiveHelper(s, size) {
    if (size === 0) return s[0];
    return s[size] + __reverseRecursiveHelper(s, size-1);
}

console.log(reverseRecursive("hello"))