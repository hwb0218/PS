#include <bits/stdc++.h>
using namespace std;
const int N = 3;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
int a[N][N], visited[N][N]; 

void go(int y, int x) {
  visited[y][x] = 1;
  cout << y << " : " << x << "\n";
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
    if (visited[ny][nx]) continue;
    if (a[ny][nx] == 0) continue;
    go(ny, nx);
  }
  return;
}

int main() {
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      go(i, j);
    }
  }
  return 0;
}