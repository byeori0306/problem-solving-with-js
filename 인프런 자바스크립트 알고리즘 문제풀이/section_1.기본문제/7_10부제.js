/* 1월 2일 (일) - 10부제 - 1회차 */

function solution(n, arr) {
	let	car = 0;

	for (let x of arr) {
		if (x % 10 === n) {
			car += 1;
		}
	}
	return (car);
}

/*
10진수를 10으로 나누면 나머지는 언제나 해당 10진수의 일의 자리다.
*/