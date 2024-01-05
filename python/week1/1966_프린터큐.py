from sys import stdin
from collections import deque

t = int(stdin.readline())

for _ in range(t):
    n, m = map(int, stdin.readline().split())
    queue = deque(list(map(int, stdin.readline().split())))
    cnt = 0
    while len(queue) > 0:
        max_prio = max(queue)
        if queue[0] == max_prio:
            queue.popleft()
            if m == 0:
                cnt += 1
                break
            else:
                cnt += 1
                m -= 1
        else:
            queue.append(queue.popleft())
            if m == 0:
                m = len(queue) - 1
            else:
                m -= 1
    print(cnt)