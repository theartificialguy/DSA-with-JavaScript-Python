// https://leetcode.com/problems/valid-parentheses/

// valid paranthesis
// "()" - true
// "()[]{}" - true
// "(]" - false
// "([)]" - false
// ")" - false
// "(])" - false

function validParanthesis(s) {
    // keep pushing opening type,
    // whenever closing type is encountered,
    // check top of stack,
    // if top is equal to its opposite closing type,
    // pop top
    // else push it to stack
    const validPairs = {
        ")":"(",
        "]":"[",
        "}":"{",
    };
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let top = stack[stack.length-1]; // open type
            if (top === validPairs[s[i]]) { // close = open
                stack.pop(); // last open popped
            } else {
                stack.push(s[i]);
            }
        }
    }
    if (stack.length === 0) return true;
    return false;
}

console.log(validParanthesis("()"))
console.log(validParanthesis("()[]{}"))
console.log(validParanthesis("(]"))
console.log(validParanthesis(")"))
console.log(validParanthesis("(])"))
console.log(validParanthesis("([)]"))