/* 1월 1일 (토) - 삼각형 판별하기 - 1회차 */

function find_max(a, b, c) {
	let max = a;

	if (max < b)
		max = b;
	if (max < c)
		max = c;
	return max;
}

function solution(a, b, c) {
	let max = find_max(a, b, c);
	let sum = 0;

	if (a !== max)
		sum += a;
	if (b !== max)
		sum += b;
	if (c !== max)
		sum += c;

	if (max < sum)
		console.log("YES");
	else
		console.log("NO");
}

/* 풀이
sum = a + b + c;
if (sum - max <= max)
	answer = "NO";
*/