function solution(n) {
	let	quotient = parseInt(n / 12);
	let	remainder = n % 12;

	if (remainder != 0)
		quotient += 1;

	console.log(quotient);
}

/* 풀이
Math.ceil()을 사용
*/