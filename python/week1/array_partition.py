nums = [1,4,3,2]

def arrayPairSum(nums):
    sorted_nums = sorted(nums)
    temp = []
    ret = 0
    for i in range(len(sorted_nums)):
        temp.append(sorted_nums[i])
        if i % 2 == 1:
            ret += min(temp)
            temp = []
    return ret

print(arrayPairSum(nums))