/* 1월 3일 (월) - 가장 긴 문자열 - 1회차 */

function solution(n, arr) {
	let	max = 0;
	let	ans;

	for (let x of arr) {
		if (max < x.length) {
			max = x.length;
			ans = x;
		}
	}
	return (ans);
}