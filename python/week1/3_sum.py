def threeSum(nums):
    nums.sort()
    res = []
    for i, a in enumerate(nums):
        if i > 0 and a == nums[i - 1]:
            continue
        l = i + 1
        r = len(nums) - 1
        while l < r:
            three = a + nums[l] + nums[r]
            if three > 0:
                r -= 1
            elif three < 0:
                l += 1
            else:
                p = []
                p.append(a)
                p.append(nums[l])
                p.append(nums[r])
                res.append(p)
                while nums[l] == p[1] and l < r:
                    l += 1
                while nums[r] == p[2] and l < r:
                    r -= 1
    return res


inputs = [-1, 0, 1, 2, -1, -4]
print(threeSum(inputs))

