/**
 * @desc date : Sat 01/08/22
 * @desc problem : k번째 큰 수
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수(3<=n<=100)
 * @param {number} k 자연수(1<=k<50)
 * @param {Array} arr n개의 카드 값을 담은 배열
 * @returns {number} 3장의 카드를 뽑아 적힌 수의 합한 값 중 k번째로 큰 수
 */
 function solution(n, k, arr) {
	let	sum = [];

	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let l = j + 1; l < n; l++) {
				sum.push(arr[i] + arr[j] + arr[l]);
			}
		}
	}
	let	set = new Set(sum);
	let	new_sum = Array.from(set);
	new_sum.sort((a, b) => b - a);
	return (new_sum[k - 1]);
}

/**
 * @desc : 풀이
 * let sum = new Set();
 * sum.add(arr[i] + arr[j] + arr[l]);
 */