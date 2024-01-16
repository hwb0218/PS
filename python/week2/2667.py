n = int(input())

apt = [list(map(int, input())) for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [-1, 0 , 1, 0]

def dfs(x, y):
  global cnt
  if apt[x][y] == 0:
    return
  
  apt[x][y] = 0 
  cnt += 1

  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    
    if nx >= n or nx < 0 or ny >= n or ny < 0:
      continue
    dfs(nx, ny)


ret = []
for x in range(n):
    for y in range(n):
        if apt[x][y] == 1:
            cnt = 0
            dfs(x, y)
            ret.append(cnt)

print(ret)
