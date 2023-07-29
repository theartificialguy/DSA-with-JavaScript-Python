// palindrome number
// 121 => true
// 12 => false

function reverseString(str) {
    let reverse_string = ""
    for(let i=str.length-1; i>=0; i--) {
        reverse_string += str[i]
    }
    return reverse_string
}

function isPalindrome(num) {
    // TC: 135ms -> beats 99.76% of js users
    // SC: 50.62mb -> beats 80.99% of js users
    return num.toString() === reverseString(num.toString())
}

console.log(isPalindrome(121))