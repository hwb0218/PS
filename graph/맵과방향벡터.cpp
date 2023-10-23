#include <bits/stdc++.h>
using namespace std;
const int N = 3;
int a[N][N], visited[N][N];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};

void go(int y, int x) {
  visited[y][x] = 1;
  cout << y << " : " << x << "\n";
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
    if (visited[ny][nx]) continue;
    if (!a[ny][nx]) continue;
    go(ny, nx);
  }
}

int main() {
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      cin >> a[i][j];
    }
  }
  go(0, 0);
  return 0;
}