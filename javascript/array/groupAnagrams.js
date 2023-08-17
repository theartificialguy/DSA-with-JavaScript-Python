// group anagrams
// i/p = ["eat","tea","tan","ate","nat","bat"]
// o/p = [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
    // TC: O(n)
    // SC: O(n)
    let anagrams = {};
    for (let i=0; i<strs.length; i++) {
        const word = strs[i];
        if (anagrams.hasOwnProperty(word.split("").sort().join(""))) {
            anagrams[word.split("").sort().join("")].push(word);
        } else {
            anagrams[word.split("").sort().join("")] = [word];
        }
    }
    const group_anagrams = [];
    for (key in anagrams) {
        group_anagrams.push(anagrams[key]);
    }
    return group_anagrams;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));