/* 1월 3일 (월) - 대소문자 변환 - 1회차 */

function solution(str) {
	let ans = "";

	for (let c of str) {
		if (c >= 'A' && c <= 'Z')
			ans += c.toLowerCase();
		else if (c >= 'a' && c <= 'z')
			ans += c.toUpperCase();
	}
	return (ans);
}