#include <bits/stdc++.h>
using namespace std;
int n;
int main() {
    while(cin >> n) {
        int temp = 1, digit = 1;
        while(true) {
            if(temp % n == 0) break;
            temp = temp * 10 + 1;
            temp %= n;
            digit++;
        }
        cout << digit << "\n";
    }
    return 0;
}

// 11 % 7 = 4
// (1 % 7) * 10 + 1 = 11
// ((1 % 7) * 10 + 1) % 7 = 4