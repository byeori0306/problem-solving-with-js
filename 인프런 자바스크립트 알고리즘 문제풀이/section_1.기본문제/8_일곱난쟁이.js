/* 1월 2일 (일) - 일곱난쟁이 - 1회차 */

function solution(arr) {
	let sum = 0;
	let n;

	for (let x of arr) { /* let sum = arr.reduce((a, b) => a + b, 0); */
		sum += x;
	}
	n = sum - 100;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === n) { /* if (sum - (arr[i] + arr[j]) === 100) */
				arr.splice(j, 1);
				arr.splice(i, 1);
			}
		}
	}
	return (arr);
}