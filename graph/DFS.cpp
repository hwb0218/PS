#include <bits/stdc++.h>
using namespace std;
const int N = 6;
vector<int> adj[6];
int visited[N];

void dfs(int idx) {
  visited[idx] = 1;
  cout << idx << "\n";
  for (int there: adj[idx]) {
    if (!visited[there]) dfs(there);
  }
  return;
}

int main() {
  adj[1].push_back(2);
  adj[1].push_back(3); 
  adj[2].push_back(4);  
  adj[4].push_back(2);  
  adj[2].push_back(5);   
  dfs(1);
  return 0;
}



