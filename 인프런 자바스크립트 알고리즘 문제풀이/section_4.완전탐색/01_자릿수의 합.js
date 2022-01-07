/**
 * @desc date : Thu 01/07/22
 * @desc problem : 자릿수의 합
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수의 개수 n(3<=n<=100)
 * @param {Array} arr 10만을 넘지 않는 n개의 자연수를 가지고 있는 배열
 * @returns {number} 자릿수의 합이 최대인 자연수
 */
function solution(n, arr) {
	let	max = 0;
	let	ans;
	
	for (let x of arr) {
		let	sum = 0;
		let	tmp = x;
		while (tmp) {
			sum += tmp % 10;
			tmp = parseInt(tmp / 10);
		}
		if (sum > max) {
			max = sum;
			ans = x;
		}
		else if (sum === max && x > ans)
			ans = x;
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 내장함수 사용하여 각 자릿수 합 구할 수도 있음
 * let sum = x.toString().split('').reduce((a, b)=>a+Number(b), 0);
 */