# A pangram is a sentence where every letter of the English alphabet appears at least once.

s1 = "thequickbrownfoxjumpsoverthelazydog"
s2 = "leetcode"

def isPangram(sentence): # 42ms
    # TC = O(n) -> as set() iterates over the iterable & works like hash-table
    # SC - O(n) -> for storing n characters of sentence in set
    return len(set(sentence)) == 26
    
print(isPangram(s1))
print(isPangram(s2))