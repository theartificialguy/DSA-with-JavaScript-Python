// fiboncci series - sum of prev 2 nums = current num
// 0, 1, 1, 2, 3, 5, 8, 13, ...

function fib_brute(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

let cache = {}
function fib_memoized(n, cache) {
    if (n <= 1) return n;
    if (cache.hasOwnProperty(n)) {
        return cache[n];
    }
    next = fib_memoized(n-1, cache) + fib_memoized(n-2, cache);
    cache[n] = next
    return next
}

console.log(fib_memoized(7, cache))