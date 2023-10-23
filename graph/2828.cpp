#include <bits/stdc++.h>
using namespace std;
int n, m, j, l, r, ret, a;

int main() {
  cin >> n >> m >> j;
  l = 1;
  for (int i = 0; i < j; i++) {
    r = l + m - 1;
    cin >> a;
    if(a >= l && a <= r) continue;
    if (a < l) {
      ret += l - a;
      l = a;
    } else {
      ret += a - r;
      l += a - r;
    }
  }
  cout << ret << "\n";
  return 0;
}