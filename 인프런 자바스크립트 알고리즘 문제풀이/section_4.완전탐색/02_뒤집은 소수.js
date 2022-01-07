/**
 * @desc date : Thu 01/07/22
 * @desc problem : 뒤집은 소수
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수의 개수 n(3<=n<=100)
 * @param {Array} arr 10만을 넘지 않는 n개의 자연수를 가지고 있는 배열
 * @returns {Array} arr의 각 자연수를 뒤집은 후 그 수가 소수면 element로 갖는 배열
 */
function solution(n, arr) {
	let	ans = [];
	
	for (let x of arr) {
		x = parseInt(String(x).split("").reverse().join(""));
		console.log(x);
		if (x === 2) {
			ans.push(x)
		}
		else if (x !== 1) {
			let	flag = true;
			for (let i = 2; i <= parseInt(x / 2 + 1); i++) {
				if (x % i === 0) {
					flag = false;
					break;
				}
			}
			if (flag == true)
				ans.push(x);
		}
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 내장 함수 쓰지 않고 숫자 뒤집을 수 있음
 * let	res = 0;
 * while (x) {
 * 	let t = x % 10;
 * 	res = res * 10 + t;
 * 	x = parseInt(x / 10);
 * }
 */