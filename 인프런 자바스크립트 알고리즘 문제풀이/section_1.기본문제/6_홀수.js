/* 1월 1일 (토) - 홀수 - 1회차 */

function solution(arr) {
	let sum = 0;
	let min = 101;

	for (let i = 0; i < arr.length; i++) { 
		if (arr[i] % 2 === 1) {
			sum += arr[i];
			if (min > arr[i])
				min = arr[i];
		}
	}

	console.log(sum);
	console.log(min);
}

/* tip
for (let x of arr) {
	sum += x
}
*/