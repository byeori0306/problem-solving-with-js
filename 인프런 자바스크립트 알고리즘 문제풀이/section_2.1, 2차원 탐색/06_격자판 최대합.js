/* 1월 5일 (수) - 격자판 최대합 - 1회차 */

function solution(n, arr) {
	let	sum = [];
	let	row = 0;
	let	col = 0;
	let	dia_1 = 0;
	let	dia_2 = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			row += arr[i][j];
			col += arr[j][i];
		}
		sum.push(row);
		sum.push(col);
		row = 0;
		col = 0;
		dia_1 += arr[i][i];
		dia_2 += arr[i][(n - 1) - i];
	}
	sum.push(dia_1);
	sum.push(dia_2);
	return (Math.max(...sum));
}

/*
굳이 push한 다음 마지막에 max값을 구하지 않고
합을 구할 때마다 max 값 구하면 깔끔
ex) answer = Math.max(answer, sum1, sum2);
*/