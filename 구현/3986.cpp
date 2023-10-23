#include <bits/stdc++.h>
using namespace std;
int n, cnt;
string s;

int main() {
    cin >> n;
    while(n--) {
        stack<char> stk;
        cin >> s;
        for (char c : s) {
            if(!stk.empty() && stk.top() == c) {
                stk.pop();
                continue;
            }
            stk.push(c);
        }   
        if (stk.size() == 0) {
            cnt++;
        }
    }
    cout << cnt << "\n";
    return 0;
}