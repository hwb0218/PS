import heapq

def kWeakestRows(mat, k):
    heap = sorted([(sum(row), idx) for idx, row in enumerate(mat)], key=lambda x: (x[0], x[1]))

    heapq.heapify(heap)

    return [heapq.heappop(heap)[1] for _ in range(k)]


mat = [[1, 1, 0, 0, 0],
 [1, 1, 1, 1, 0],
 [1, 0, 0, 0, 0],
 [1, 1, 0, 0, 0],
 [1, 1, 1, 1, 1]]
k = 3

print(kWeakestRows(mat, k))