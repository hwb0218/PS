#include <bits/stdc++.h>
using namespace std;
int n, m;
string s;
map<string, int> mp;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL), cout.tie(NULL);
    cin >> n >> m;
    string a[n];
    for (int i = 0; i < n; i++) {
        cin >> s;
        mp.insert({s, i + 1});
        a[i + 1] = s;
    }

    for (int i = 0; i < m; i++) {
        cin >> s;
        if (atoi(s.c_str())) {
           cout << a[atoi(s.c_str())] << "\n";
        } else {
            cout << mp[s] << "\n";
        }
    }

    return 0;
}