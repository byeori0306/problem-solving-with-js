/* 1월 1일 (토) - 세 수 중 최솟값 - 1회차 */

function solution(a, b, c) {
	let	min = a;

	if (min > b)
		min = b;
	if (min > c)
		min = c;
	console.log(min);
}

/* 풀이
if (a < b)
	min = a;
else
	min = b;
if (c < min)
	min = c;
 */