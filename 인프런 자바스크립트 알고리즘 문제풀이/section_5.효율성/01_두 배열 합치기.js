/**
 * @desc date : Sun 01/09/22
 * @desc problem : 두 배열 합치기
 * @desc round : 1st
 */

/**
 * @param {Array} n 오름차순으로 정렬된 배열
 * @param {Array} m 오름차순으로 정렬된 배열
 * @returns {Array} n과 m 배열을 오름차순으로 합친 배열
 */
function solution(n, m) {
	let	ans = n.concat(m).sort((a, b) => a - b);

	return (ans);
}

/**
 * @desc : 풀이
 * sort 함수를 호출하면 O(nlog(n))시간이 걸림
 * O(n + m)시간에 끝낼 수 있는 문제 -> two pointers algorithm
 */