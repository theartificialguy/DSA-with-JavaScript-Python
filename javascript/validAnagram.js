/ valid anagram
// s = "car", t = "rat" => false
// s = "lana", t = "anal" => true

// 1) using sorting
function isValidAnagram_sort(s, t) {
    // TC: O(nlogn) + O(n)
    // SC: O(s.length + t.length)
    return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(isValidAnagram_sort("car", "rat"))
console.log(isValidAnagram_sort("lana", "anal"))

// 2) using hash map
function isValidAnagram_hash(s, t) {
    if (s.length !== t.length) return false;

    let s_cache = {}
    let t_cache = {}
    
    // freq of every char in s
    for(let i=0; i<s.length; i++) {
        if (!s_cache.hasOwnProperty(s[i])) {
            s_cache[s[i]] = 1
        } else {
            s_cache[s[i]] += 1
        }
    }
    
    // freq of every char in t
    for(let i=0; i<t.length; i++) {
        if (!t_cache.hasOwnProperty(t[i])) {
            t_cache[t[i]] = 1
        } else {
            t_cache[t[i]] += 1
        }
    }
    
    // if they do, check freq values for each char
    for(const key in s_cache) {
        if (s_cache.hasOwnProperty(key)) {
            s_value = s_cache[key];
            if (t_cache.hasOwnProperty(key)) {
                t_value = t_cache[key]
                if (s_value !== t_value) return false
            } else {
                return false;
            }
        }
    }
    return true
}

console.log(isValidAnagram_hash("car", "rat"))
console.log(isValidAnagram_hash("lana", "anal"))

function isValidAnagram_hash_improved(s, t) {
    if (s.length !== t.length) return false
    
    let s_cache = {}
    let t_cache = {}
    
    // freq of every char in s & t as both have same length now
    for(let i=0; i<s.length; i++) {
        s_cache[s[i]] = (s_cache[s[i]] || 0) + 1
        t_cache[t[i]] = (t_cache[t[i]] || 0) + 1
    }
    
    // if they do, check freq values for each char
    for(const key in s_cache) {
        if (s_cache[key] !== t_cache[key]) return false;
    }
    return true
};

console.log(isValidAnagram_hash_improved("car", "rat"))
console.log(isValidAnagram_hash_improved("lana", "anal"))