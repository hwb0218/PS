#include <bits/stdc++.h>
using namespace std;
string s;

bool isVowel (int idx) {
  return idx == 'a' || idx == 'e' || idx == 'i' || idx == 'o' || idx == 'u';
}

int main() {
  while(true) {
    cin >> s;
    if (s == "end") break;
    bool hasV = 0, flag = 0;
    int Vcnt = 0, Ccnt = 0;
    int prevIdx = -1;
    for (int i = 0; i < s.size(); i++) {
        int idx = s[i];
        if (isVowel(idx)) Vcnt++, Ccnt = 0, hasV = 1; 
        else Vcnt = 0, Ccnt++;
        if (Vcnt == 3 || Ccnt == 3) flag = 1;
        if (idx >= 1 && prevIdx == idx && !(idx == 'e' || idx == 'o')) flag = 1;
        prevIdx = idx;
    }
    if(hasV == 0) flag = 1;
    if(flag) cout << "<" << s << ">" << " is not acceptable.\n";
		else cout << "<" << s << ">" << " is acceptable.\n";
  }
  return 0;
}