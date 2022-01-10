/**
 * @desc date : Mon 01/10/22
 * @desc problem : 최대 매출
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수(5<=n<=100,000)
 * @param {number} k 자연수(2<=k<=n)
 * @param {Array} arr n개의 500 이하의 음이 아닌 정수 숫자열
 * @returns {number} 연속된 k일 동안의 최대 매출액
 */
function solution(n, k, arr) {
	let	max = 0;

	for (let i = 0; i < n; i++) {
		let	sum = 0;
		for (let j = 0; j < k; j++) {
			sum += arr[i + j];
		}
		if (sum > max)
			max = sum;
	}
	return (max);
}

/**
 * @desc : 풀이
 * 이중 for문을 사용하는 방법은 O(nk) 시간이 걸림
 * 슬라이딩 윈도우 기법을 사용하면 O(n) 시간 안에 끝낼 수 있음
 */