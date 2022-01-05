/* 1월 5일 (수) - 봉우리 - 1회차 */

function solution(n, arr) {
	let	cnt = 0;
	let	p = new Array(n + 2);

	for (let i = 0; i < n + 2; i++) {
		p[i] = new Array(n + 2).fill(0);
	}
	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < n + 1; j++) {
			p[i][j] = arr[i - 1][j - 1];
		}
	}
	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < n + 1; j++) {
			if (p[i][j] > p[i - 1][j] && p[i][j] > p[i + 1][j] && p[i][j] > p[i][j - 1] && p[i][j] > p[i][j + 1])
				cnt += 1;
		}
	}
	return (cnt);
}

/* 방향 탐색
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
i + dx[k];
j + dy[k];
*/