// Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

function rpn (tokens) {
    // keep pushing in stack if number
    // when operator is encountered, do 3 things:-
    //      1) check if stack has atleast 2 nums
    //      2) pop last 2 nums from stack (careful with positions as 1st popped num should be 2nd num => 1st + 2nd)
    //      3) apple the operation and push the result in stack
    const stack = [];
    for (let i=0; i<tokens.length; i++) {
        if ((tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') && stack.length >= 2) {
            const previousTwoNums = [null, null]; // ~= O(1)
            let j = 0;
            while (j < 2) { // O(2) ~= O(1)
                const popped = stack.pop()
                previousTwoNums[j] = popped;
                j += 1;
            };
            const operator = tokens[i];
            const operand2 = previousTwoNums[0];
            const operand1 = previousTwoNums[1];
            let result = null;
            if (operator === '+') result = operand1+operand2;
            else if (operator === '-') result = operand1-operand2;
            else if (operator === '*') result = operand1*operand2;
            else result = Math.trunc(operand1/operand2); // trunc for -ve nums
            stack.push(Number(result));
        } else stack.push(Number(tokens[i]));
    }
    return stack[0];
};

console.log(rpn(["2","1","+","3","*"])) // 9
console.log(rpn(["4","13","5","/","+"])) // 6
console.log(rpn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22