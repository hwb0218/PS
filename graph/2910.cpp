#include <bits/stdc++.h>
using namespace std;
map<int, int> mp, mp_first;
int n, c, a[1004];
vector<pair<int, int>> v;

bool cmp(pair<int, int> a, pair<int, int> b) {
  // 빈도수가 같다면 
  if (a.first == b.first) {
    // mp_first의 value로 비교한다. value값이 작은게 우선순위가 높다.
   return mp_first[a.second] < mp_first[b.second];
  }
  return a.first > b.first;
}

int main() {
  cin >> n >> c;
  for (int i = 0; i < n; i++) {
    cin >> a[i];
    mp[a[i]]++;
    // 첫번째 순회에 2가 나왔다면 mp_first[2] = 0 + 1;
    // 두번째 순회에 1이 나왔다면 mp_first[1] = 1 + 1;
    // 다음 순회에 1 또는 2가 나왔다면 0이 아니므로 스킵.
    if(mp_first[a[i]] == 0) mp_first[a[i]] = i + 1; 
  }

  for (auto it: mp) {
    // vector로 정렬하려는 목적, second를 pair의 첫번째 요소로 넣는 이유는 커스텀 비교함수에서 first로 비교하기 위해..?
    v.push_back({it.second, it.first});
  }
  sort(v.begin(), v.end(), cmp);

  for (auto i : v) {
    for (int j = 0; j < i.first; j++) {
      cout << i.second << " ";
    }
  }

  return 0;
}