s = "babad"

def longestPalindrome(str):
    def expand(left, right):
        while left >= 0 and right < len(str) and str[left] == str[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    if len(str) < 2 or str == str[::-1]:
        return str
    result = ''
    for i in range(len(str) - 1):
        # key=len은 문자열 길이를 기준으로 최댓값을 구함
        result = max(result, expand(i, i + 1), expand(i, i + 2), key=len)
    return result

print(longestPalindrome(s))