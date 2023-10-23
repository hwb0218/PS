#include <bits/stdc++.h>
using namespace std;
const int N = 10;
int a[N][N], visited[N];

void go(int from) {
  visited[from] = 1;
  cout << from << "\n";
  for (int i = 0; i < N; i++) {
    if(visited[i]) continue;
    if(a[from][i]) go(i);
  }
}

int main() {
  a[1][2] = 1, a[2][1] = 1, a[1][3] = 1;
  a[3][1] = 1, a[3][4] = 1, a[4][3] = 1;

  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      if(a[i][j] && !visited[i]) {
        go(i);
      }
    }
  }

  return 0;
}