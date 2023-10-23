#include <bits/stdc++.h>
using namespace std;
const int N = 104;
int adj[N][N], visited[N][N];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int n, m, cnt;

void dfs(int y, int x) {
  visited[y][x] = 1;
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (visited[ny][nx]) continue;
    if (!adj[ny][nx]) continue;
    dfs(ny, nx);
  }
}

int main() {
  cin.tie(NULL), cout.tie(NULL);
  cin >> n >> m;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      cin >> adj[i][j];
    }
  }
  
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (!visited[i][j] && adj[i][j]) {
        cnt++;
        dfs(i, j);
      }
    }
  }
  cout << cnt << "\n";
  return 0;
}

