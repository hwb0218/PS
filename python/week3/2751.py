from sys import stdin
import heapq

nums = []

read = stdin.readline

for _ in range(int(read())):
    nums.append(int(read()))

heapq.heapify(nums)

for _ in range(len(nums)):
    print(heapq.heappop(nums))


from sys import stdin

read = stdin.readline

N = int(read())

nums = []

for i in range(N):
  nums.append(int(read()))

nums.sort()

for n in nums:
  print(n)    