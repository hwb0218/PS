#include <bits/stdc++.h>
using namespace std;

int alpha['z' - 'a'];
string str;

int main() {
    cin >> str;

    for (char c: str) {
        alpha[c - 'a']++;
    }
    for (int i = 0; i <= 'z' - 'a'; i++) cout << alpha[i] << " ";
    return 0;
}