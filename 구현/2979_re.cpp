#include <bits/stdc++.h>
using namespace std;

int a, b, c, s, e, cnt[100], ret;

int main() {
    cin >> a >> b >> c;
    for (int i = 0; i < 3; i++) {
        cin >> s >> e;
        for (int j = s; j < e; j++) cnt[j]++;
    }

    for (int i = 1; i < sizeof(cnt) / sizeof(int); i++) {
        if(!cnt[i]) continue;
        if(cnt[i] == 1) ret += a;
        if(cnt[i] == 2) ret += b * 2;
        if(cnt[i] == 3) ret += c * 3;
    }
    cout << ret << "\n";
    return 0;
}