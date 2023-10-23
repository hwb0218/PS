#include <bits/stdc++.h>
using namespace std;

int n = 9, sum, a[10];
pair<int, int> pi;
vector<int> v;

void comb() {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (sum - a[i] - a[j] == 100) {
                pi = {i, j};
                break;
            }
        }
    }
}

int main() {
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        sum += a[i];
    }
    comb();
    for (int i = 0; i < n; i++) {
        if (i == pi.first || i == pi.second) continue;
        v.push_back(a[i]);
    }
    sort(v.begin(), v.end());

    for (int i : v) cout << i << "\n";

    return 0;
}