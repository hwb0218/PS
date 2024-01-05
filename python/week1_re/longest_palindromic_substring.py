def longestPalindrome(s):
    def expand_window(left, right):
        while left >= 0 and right < len(str) and s[left] == s[right]:
            left -= 1
            right += 1
        print(left, right, s[left + 1:right])
        return s[left + 1:right]

    if len(s) < 2 or s == s[::-1]:
        return s
    result = ''
    for i in range(len(s) - 1):
        result = max(result, expand_window(i, i + 1), expand_window(i, i + 2), key=len)
    return result

str = "babbb"
print(longestPalindrome(str))