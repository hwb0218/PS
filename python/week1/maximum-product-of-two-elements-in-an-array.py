import heapq

def maxProduct(nums) -> int:

    heap = [-1 * num for num in nums]

    heapq.heapify(heap)

    max_1 = -heapq.heappop(heap)
    max_2 = -heapq.heappop(heap)

    return (max_1 - 1) * (max_2 - 1)

print(maxProduct([3,4,5,2]))