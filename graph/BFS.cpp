#include <bits/stdc++.h>
using namespace std;
const int max_n = 104;
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int n, m, a[max_n][max_n], visited[max_n][max_n], sy, sx, ey, ex, y, x;

int main(){ 
    cin.tie(NULL), cout.tie(NULL);
    cin >> n >> m;
    cin >> sy >> sx; 
    cin >> ey >> ex;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
        	cin >> a[i][j]; 
        }
    } 
    queue<pair<int, int>> q;  
    visited[sy][sx] = 1;
    q.push({sy, sx});  
    while(q.size()){
        tie(y, x) = q.front(); q.pop(); 
        for(int i = 0; i < 4; i++){
            int ny = y + dy[i]; 
            int nx = x + dx[i]; 
            if(ny < 0 || ny >= n || nx < 0 || nx >= m || a[ny][nx] == 0) continue; 
            if(visited[ny][nx]) continue; 
            visited[ny][nx] = visited[y][x] + 1; 
            q.push({ny, nx}); 
        } 
    }
    cout <<  visited[4][4] << "\n";
    return 0;
}  


/* 
graph에서 동일한 레벨의 노드를 탐색 후 다음 레벨을 탐색하는 알고리즘입니다. 
방문한 노드는 다시 방문하지 않으며 가중치가 동일한 그래프에서 최단거리 알고리즘으로 사용됩니다.
 */