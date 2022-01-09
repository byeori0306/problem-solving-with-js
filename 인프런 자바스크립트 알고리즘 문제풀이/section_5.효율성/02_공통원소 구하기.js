/**
 * @desc date : Sun 01/09/22
 * @desc problem : 공통 원소 구하기
 * @desc round : 1st
 */

/**
 * @param {Array} a 크기 n이 1<=n<=30,000인 배열
 * @param {Array} b 크기 m이 1<=m<=30,000인 배열
 * @returns {Array} 집합 a, b의 공통원소를 오름차순 정렳한 배열
 */
function solution(a, b) {
	const	setA = new Set(a);
	const	setB = new Set(b);
	let		inter = new Set();

	for (let x of setA) {
		if (setB.has(x))
			inter.add(x);
	}
	return ([...inter].sort((a, b) => a - b));
}

/**
 * @desc : 풀이
 * 각 배열을 정렬 후 전 문제와 같이 two pointer algorithm을 사용
 */