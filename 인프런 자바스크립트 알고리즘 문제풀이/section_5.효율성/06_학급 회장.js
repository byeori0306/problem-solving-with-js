/**
 * @desc date : Mon 01/10/22
 * @desc problem : 학급 회장
 * @desc round : 1st
 */

/**
 * @param {number} n 반 학생수 N(5<=n<=50)
 * @param {string} str n개의 투표용지가 입력된 문자열
 * @returns {string} 학급 회장으로 선택된 기호
 */
function solution (n, str) {
	let	vote = {};
	let	max = 0;
	let	ans = '';

	for (let x of str) {
		vote[x] = 0;
	}
	for (let x of str) {
		vote[x] += 1;
	}
	for (let x in vote) {
		if (vote[x] > max) {
			max = vote[x];
			ans = x;
		}
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 자바스크립트의 Map 객체를 사용하자!
 */