from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
  result = []
  def dfs(idx, path):
      result.append(path)

      for i in range(idx, len(nums)):
          dfs(i + 1, path + [nums[i]])

  dfs(0, [])

  return result

print(subsets([1, 2, 3]))