s1, t1 = "anagram", "nagaram" # true
s2, t2 = "rat", "car" # false

def validAnagram(s, t): # 63ms
    s_map = {} # SC - O(n)
    t_map = {} # SC - O(n)
    for char in s: # TC - O(n)
        if char not in s_map:
            s_map[char] = 1
        else:
            s_map[char] += 1
    for char in t: # TC - O(n)
        if char not in t_map:
            t_map[char] = 1
        else:
            t_map[char] += 1
    # TC - O(n)
    # SC - O(n)
    return s_map == t_map

print(validAnagram(s1, t1))    
print(validAnagram(s2, t2))