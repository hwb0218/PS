#include <bits/stdc++.h>
using namespace std;
const int N = 10;
vector<int> a[N];
int visited[N];

void go(int idx) {
  visited[idx] = 1;
  cout << idx << "\n";

  for (int there : a[idx]) {
    if (visited[there]) continue;
    go(there);
  }
} 

int main() {
  a[1].push_back(2); 
  a[2].push_back(1);

  a[1].push_back(3);
  a[3].push_back(1);

  a[3].push_back(4);
  a[4].push_back(3);

  for (int i = 0; i < N; i++) { 
    if(a[i].size() && !visited[i]) go(i);
  }

  return 0;
}