/* 1월 24일 (월) - 봉우리 - 2회차 */

function solution(n, arr) {
	let	cnt = 0;
	let	dx = [-1, 0, 1, 0];
	let	dy = [0, 1, 0, -1];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let check = 0; // let flag = 1;
			for (let k = 0; k < 4; k++) {
				let	x = i + dx[k];
				let	y = j + dy[k];
				// if (x >= 0 && y >= 0 && x < n && y < n && arr[i][j] > arr[x][y])
				//	flag = 0; break;
				if (x < 0 || y < 0 || x >= n || y >= n)
					check += 1;
				else if (arr[i][j] > arr[x][y])
					check += 1;
			}
			if (check === 4) // if (flag)
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
flag 사용
*/