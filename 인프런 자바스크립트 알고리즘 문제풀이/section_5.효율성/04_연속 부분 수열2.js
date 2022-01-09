/**
 * @desc date : Sun 01/09/22
 * @desc problem : 연속 부분 수열2
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수(1<=n<=100,000,000)
 * @param {Array} arr 1<=m<=100,000개의 수로 이루어진 수열
 * @returns 합이 n 이하가 되는 연속부분수열
 */
 function solution(n, arr) {
	let	cnt = 0;

	for (let i = 0; i < arr.length; i++) {
		let	sum = arr[i];
		if (sum <= n)
			cnt += 1;
		for (let j = i + 1; j < arr.length; j++) {
			sum += arr[j];
			if (sum <= n)
				cnt += 1;
			else
				break;
		}
	}
	return (cnt);
}