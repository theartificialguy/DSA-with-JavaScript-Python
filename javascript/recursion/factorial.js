// factorial of a number
// 5 -> 5*4*3*2*1 = 120

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}

// f(5) -> 5 * f(4) -> 5 * 24 = 120, returns 120
// f(4) -> 4 * f(3) -> 4 * 6 = 24, returns 24
// f(3) -> 3 * f(2) -> 3 * 2 = 6, returns (6)
// f(2) -> 2 * f(1) -> 2 * 1 = 2, returns (2)
// f(1) -> 1 (returns 1)

console.log(factorial(105))