#include <bits/stdc++.h>
using namespace std;
const int N = 10;
int adj[N][N], visited[N];

void go(int from) {
    cout << from << "\n";
    visited[from] = 1;
    for (int i = 0; i < N; i++) {
        if(visited[i]) continue;
        if(adj[from][i]) go(i);
    }
    return;
}

int main() {
    adj[1][2] = 1, adj[1][3] = 1, adj[3][4] = 1,
    adj[2][1] = 1, adj[3][1] = 1, adj[4][3] = 1;
    
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if(adj[i][j] && visited[N] == 0) {
                go(i);
            }
        }
    }

    return 0;
}