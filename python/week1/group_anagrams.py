input = ["eat","tea","tan","ate","nat","bat"]


def groupAnagrams(strs):
    group = {}

    for str in strs:
        sorted_str = ''.join(sorted(str))
        if sorted_str in group:
            group[sorted_str].append(str)
        else:
            group[sorted_str] = [str]
    return list(group.values())


print(groupAnagrams(input))