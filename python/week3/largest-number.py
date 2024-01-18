from typing import List
from functools import cmp_to_key

def compare(a, b):
  # -1이면 먼저 들어온 요소가 앞에 정렬된다.
  if a + b > b + a:
    return -1
  # 1이면 니중에 들어온 요소가 앞에 정렬된다.
  elif a + b < b + a:
    return 1
  else:
  # 위치가 바뀌지 않는다.
    return 0

def largestNumber(nums: List[int]) -> str:
  if not nums:
    return ''
  
  strs = list(map(str, nums))
  strs.sort(key=cmp_to_key(compare))

  return ''.join(strs)

print(largestNumber([3,30,34,5,9]))