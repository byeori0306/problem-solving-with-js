/* 1월 1일 (토) - 1부터 N까지의 합 - 1회차 */

function solution(n) {
	let sum = 0;

	for (let i = 1; i < n + 1; i++) {
		sum += i;
	}
	console.log(sum);
}