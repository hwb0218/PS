#include <bits/stdc++.h>
using namespace std;

int a, b, c, s, e, cnt[104], sum;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);

	cin >> a >> b >> c; 
	for(int i = 0; i < 3; i++){
		cin >> s >> e; 
		for(int j = s; j < e; j++)cnt[j]++;
	}
	for(int i = 1; i < 100; i++){
		if(!cnt[i]) continue;
        if(cnt[i] == 1) sum += a;
        if(cnt[i] == 2) sum += b * 2;
        if(cnt[i] == 3) sum += c * 3;
		
	}
	cout << sum << "\n"; 
    return 0;
}