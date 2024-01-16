from sys import stdin

read = stdin.readline

v = int(read())
m = int(read())

graph = [[] for _ in range(v + 1)]

for _ in range(m):
  a, b = map(int, read().split())
  graph[a].append(b)
  graph[b].append(a)

visited = [False for _ in range(v + 1)]

cnt = 0

def dfs(start):
  global cnt
  visited[start] = True

  for nxt_node in graph[start]:
    if not visited[nxt_node]: 
      cnt += 1
      dfs(nxt_node)
  return cnt

print(dfs(1))