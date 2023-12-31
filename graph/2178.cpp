#include <bits/stdc++.h>
using namespace std;
const int N = 104;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
int n, m, a[N][N], visited[N][N], y, x;
queue<pair<int, int>> q;

int main() {
  cin >> n >> m;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        scanf("%1d", &a[i][j]);
    }
  }

  visited[0][0] = 1;
  q.push({0, 0});

  while(q.size()) {
    tie(y, x) = q.front(); q.pop();
    for (int i = 0; i < 4; i++) {
      int ny = y + dy[i];
      int nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if(a[ny][nx] && !visited[ny][nx]) {
        visited[ny][nx] = 1 + visited[y][x];
        q.push({ny, nx});
      }
    }
  }
  cout << visited[n - 1][m - 1] << "\n";
  return 0;
}