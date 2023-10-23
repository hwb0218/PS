#include <bits/stdc++.h>
using namespace std;
int n, pos;
string s, tc, pre, suf;

int main(){
    cin >> n;
    cin >> tc;
    pos = tc.find("*");
    pre = tc.substr(0, pos);
    suf = tc.substr(pos + 1);

    for (int i = 0; i < n; i++) {
        cin >> s;
        if (pre.size() + suf.size() > s.size()) {
            cout << "NE" << "\n";
            continue;
        }
        if (pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())) {
            cout << "DA" << "\n";
        } else cout << "NE" << "\n";
    }
    return 0;
}