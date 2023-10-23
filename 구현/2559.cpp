#include <bits/stdc++.h>
using namespace std;
int n, k, ret = -101;
int main() {
    cin >> n >> k;
    int psum[n];
    int temp = 0;
    for (int i = 1; i <= n; i++) {
        cin >> temp;
        psum[i] = psum[i - 1] + temp;
    }
    for (int i = k; i <= n; i++) {
        ret = max(ret, psum[i] - psum[i - k]);      
    }           
    cout << ret << "\n";
    return 0;
}