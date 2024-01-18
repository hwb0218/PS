from sys import stdin

read = stdin.readline

r, c, t = map(int, read().split())
board = [list(map(int, read().split())) for _ in range(r)]

def spread():
  dy = [-1, 0, 1, 0]
  dx = [0, 1, 0, -1]

  temp_board = [[0] * c for _ in range(r)]

  for x in range(r):
    for y in range(c):
      if board[x][y] > 0:
        tmp = 0
        for i in range(4):
          ny = y + dy[i]
          nx = x + dx[i]
          if 0 <= nx < r or 0 <= ny < c or board[nx][ny] != -1:
              temp_board[nx][ny] += board[x][y] // 5
              tmp += board[y][x] // 5
          board[y][x] -= tmp
  
  for x in range(r):
    for y in range(c):
      board[x][y] += temp_board[x][y]

def air_up():
    dx = [0, -1, 0, 1] 
    dy = [1, 0, -1, 0] 
    direct = 0
    prev = 0
    x, y = up, 1
    while True:
        nx = x + dx[direct]
        ny = y + dy[direct]
        # 공기청정기 순환이 끝나면 (순환 후 공기청정기를 만나면 break)
        if x == up and y == 0:
            break
        # 한 방향으로 탐색하다 벽을 만나면 방향 전환 
        if nx < 0 or nx >= r or ny < 0 or ny >= c:
            direct += 1
            continue
        # board[2][1] = 0 공기청정기 앞쪽을 0으로 만듦
        # prev = 0 
        # board[2][2](0), prev(5) = prev(0), board[2][2](5) 
        # 지금 경로의 먼지를 0으로 만드는 작업 중임 딱히 prev가 경로 상의 먼지를 0으로 만드는 것 이외엔 하는게 없음
        board[x][y], prev = prev, board[x][y]
        x = nx
        y = ny

up = -1
down = -1
for i in range(r):  
  if board[i][0] == -1:
    up = i
    down = i + 1
    break

