#include <bits/stdc++.h>
using namespace std;
const int N = 104;
int n;
string s;
char a[N][N];

string quard(int y, int x, int size) {
  if(size == 1) return string(1, a[y][x]);
  char b = a[y][x];
  string ret = "";
  for (int i = y; i < y + size; i++) {
    for (int j = x; j < x + size; j++) {
      if(b != a[i][j]) {
        ret += "(";
        ret += quard(y, x, size / 2); // 왼쪽 위
        ret += quard(y, x + size / 2, size / 2); // 오른쪽 위
        ret += quard(y + size / 2, x, size / 2); // 왼쪽 아래
        ret += quard(y + size / 2, x + size / 2, size / 2); // 오른쪽 아래
        ret += ")";
        return ret;
      }
    }
  }
  // 모든 요소가 동일할 경우
  return string(1, a[y][x]);
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> s;
    for (int j = 0; j < n; j++) {
      a[i][j] = s[j];
    }
  }
  cout << quard(0, 0, n) << "\n";
  return 0;
}