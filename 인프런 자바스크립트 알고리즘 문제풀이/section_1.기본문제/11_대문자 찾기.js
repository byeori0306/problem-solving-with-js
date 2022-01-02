/* 1월 2일 (일) - 대문자 찾기 - 1회차 */

function solution(str) {
	let ans = 0;

	for (let x of str) {
		if (x >= 'A' && x <= 'Z') /* if (x === x.toUpperCase()) */
			ans += 1;
	}
	return (ans);
}