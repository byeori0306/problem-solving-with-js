/* 1월 2일 (일) - 대문자로 통일 - 1회차 */

function solution(str) {
	let	ans = str.toUpperCase();

	return (ans);
}

/* 다른 방법
let answer = "";
for (let x of str) {
	if (x === x.toLowerCase())
		answer += x.toUpperCase();
	else
		answer += x;
}
+ ASCII code를 활용하는 방법도 있음
*/