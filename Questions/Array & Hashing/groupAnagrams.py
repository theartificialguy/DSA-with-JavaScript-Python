strs1 = ["eat","tea","tan","ate","nat","bat"]
# output = [["bat"],["nat","tan"],["ate","eat","tea"]]
strs2 = [""]
# output = [[""]]
strs3 = ["a"]
# output = [["a"]]

def groupAnagrams(strs): # 111ms
    groups = {}
    for word in strs: # O(n)
        d = ''.join(sorted(word)) # O(nlogn)
        if d in groups: # will always compare with sorted value
            groups[d].append(word)
        else:
            groups[d] = [word]
    anagrams = []
    for key, value in groups.items():
        anagrams.append(value)
    return anagrams

print(groupAnagrams(strs1))