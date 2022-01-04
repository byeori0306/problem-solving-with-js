/* 1월 4일 (화) - 점수 계산 - 1회차 */

function solution(n, arr) {
	let	score = 0;
	let	plus = 0;

	for (let x of arr) {
		if (x === 0)
			plus = 0;
		else
			plus += 1;
		score += plus;
	}
	return (score);
}