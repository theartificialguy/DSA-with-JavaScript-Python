
// https://leetcode.com/problems/reverse-words-in-a-string/submissions/
// reverse order of words in a string
// "the sky is blue" -> "blue is sky the"
// "hello world" -> "world hello"
// "a good   example" -> "example good a"

function reverseWords(s) {
    // TC: O(n)
    // SC: O(n)
    s = s.trim(); // ensuring no leading or trailing spaces
    // no need to create an empty stack for this particular problem as .split makes it for us and even adds the elements
    let stack = s.split(" ");
    let result = "";
    while (stack.length > 0) {
        const popped = stack.pop();
        if (popped !== "") result += popped + " ";
    }
    return result.trim();
}

console.log(reverseWords("a good   example"));