function validPalindrome(s) {
    let nonAlphaNumeric = removeAlphaNumeric(s);
    let loweredNonAlphaNumeric = nonAlphaNumeric.toLowerCase();
    // return loweredNonAlphaNumeric === reverse(loweredNonAlphaNumeric);
    return twoPointer(loweredNonAlphaNumeric);
}

function removeAlphaNumeric(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '');
}

function reverse(s) {
    let reversed = "";
    for (let i=s.length-1; i>=0; i--) {
        reversed += s[i];
    };
    return reversed;
}

function twoPointer(s) {
    let i = 0;
    let j = s.length-1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        else {
            i += 1;
            j -= 1;
        };
    };
    return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome(" "));