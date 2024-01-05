from collections import defaultdict


class Solution:
    # def groupAnagrams(self, strs):
    #     anagram_dict = defaultdict(list)
    #
    #     for el in strs:
    #         sorted_el = ''.join(sorted(el))
    #         anagram_dict[sorted_el].append(el)
    #     print(anagram_dict)
    #     return list(anagram_dict.values())

    def groupAnagrams(self, strs):
        anagram_dict = {}
        # 정렬된 el을 key로 하여 key가 없을 경우 추가하고 있다면, 원소 append 수행
        for el in strs:
            sorted_el = ''.join(sorted(el))

            if sorted_el in anagram_dict:
                anagram_dict[sorted_el].append(el)
            else:
                anagram_dict[sorted_el] = [el]
        return list(anagram_dict.values())



strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(Solution().groupAnagrams(strs))