/* 1월 2일 (일) - 문자 찾기 - 1회차 */

function solution(str, ch) {
	let	n = 0;

	for (let x of str) {
		if (x === ch)
			n += 1;
	}
	return (n);
}

/* 내장함수를 사용하는 방법
let n = str.split(ch).length - 1;
만약 구분자에 해당하는 문자 문자열 마지막 문자면 빈문자열과 분리함!
*/