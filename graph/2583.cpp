#include <bits/stdc++.h>
using namespace std;
#define y1 aaaa
const int N = 101;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
int n, m, k, a[N][N], visited[N][N], x1, y1, x2, y2;
vector<int> ret;

int dfs(int y, int x) {
  visited[y][x] = 1;
  int ret = 1;
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= m || nx >=n) continue;
    if (!visited[ny][nx] && a[ny][nx] != 1) {
      ret += dfs(ny, nx);
      cout << ret << "\n";
      cout << y << " : " << x << "\n";
    }
  }
  return ret;
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL), cout.tie(NULL);
  cin >> m >> n >> k;

  for (int i = 0; i < 3; i++) {
    cin >> x1 >> y1 >> x2 >> y2;
    for (int x = x1; x < x2; x++) {
      for (int y = y1; y < y2; y++) {
        a[y][x] = 1;
      }
    }
  }

  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      if(!visited[i][j] && a[i][j] != 1) {
        ret.push_back(dfs(i, j));
      }
    }
  }
  sort(ret.begin(), ret.end());
  cout << ret.size() << "\n";
  for (int i : ret) {
    cout << i << " ";
  }
  return 0;
}