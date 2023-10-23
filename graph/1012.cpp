#include <bits/stdc++.h>
using namespace std;
const int N = 54;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
int a[N][N], visited[N][N], tc, m, n, k, x, y, ret;

void dfs(int y, int x) {
  visited[y][x] = 1;
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
    if (a[ny][nx] && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL), cout.tie(NULL);
  cin >> tc;
  while(tc--) {
    ret = 0;
    fill(&a[0][0], &a[0][0] + N * N, 0);
    fill(&visited[0][0], &visited[0][0] + N * N, 0);
    cin >> m >> n >> k;
    for (int i = 0; i < k; i++) {
      cin >> x >> y;
      a[x][y] = 1;
    }

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (a[i][j] && !visited[i][j]) {
          dfs(i, j);
          ret++;
        }
      }
    }
    cout << ret << "\n";
  }
  return 0;
}