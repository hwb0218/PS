#include <bits/stdc++.h>
using namespace std;
int n, m, a[15004], cnt;
int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a, a + n);
    int l = 0, r = n - 1;
    while (l < r) {
        if (a[l] + a[r] == m) {
            l++;
            r--;
            cnt++;
        } else if (a[l] + a[r] > m) {
            r--;
        } else {
            l++;
        }
    }
    cout << cnt << "\n";
    return 0;
}