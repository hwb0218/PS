#include <bits/stdc++.h>
using namespace std;
int tc, n;
string a, b;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL), cout.tie(NULL);
    cin >> tc;
    while(tc--) {
        map<string, int> mp;
        cin >> n;
        for (int i = 0; i < n; i++) {
            cin >> a >> b;
            mp[b]++;
        }
        long long ret = 1;
        for (auto i : mp) {
            ret *= ((long long)i.second + 1);
        }
        cout << ret - 1 << "\n";
    }
    return 0;
}