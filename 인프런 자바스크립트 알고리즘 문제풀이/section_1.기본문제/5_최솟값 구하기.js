/* 1월 1일 (토) - 최솟값 구하기 - 1회차 */

function solution(arr) {
	let min = a;

	for (let i = 1; i < arr.length; i++) {
		if (min > arr[i])
			min = arr[i]
	}
	console.log(min);
}

/* tip
min = Number.MAX_SAFE_INTEGER;
*/

/* tip 2 - Rest 파라미터 사용
let answer = Math.min(...arr);
let answer = Math.max(...arr);
*/