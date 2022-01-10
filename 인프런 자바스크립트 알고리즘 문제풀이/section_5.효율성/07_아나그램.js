/**
 * @desc date : Mon 01/10/22
 * @desc problem : 아나그램
 * @desc round : 1st -> fail
 */

/**
 * @param {string} a 길이가 100이하인 단어
 * @param {string} b 길이가 100이하인 단어
 * @returns {string} 아나그램이면 "YES" 아니면 "NO"를 반환
 */
function solution(a, b) {
	let	hash_a = new Map();
	let	hash_b = new Map();
	for (let x of a) {
		if (hash_a.has(x))
			hash_a.set(x, hash_a.get(x) + 1);
		else
			hash_a.set(x, 1);
	}
	for (let x of b) {
		if (hash_b.has(x))
			hash_b.set(x, hash_b.get(x) + 1);
		else
			hash_b.set(x, 1);
	}
	for (let key of hash_a.keys()) {
		if (hash_a[key] !== hash_b[key])
			return ("NO");
	}
	return ("YES");
}

/**
 * @desc : 풀이
 * 두번째 단어인 b를 탐색하면서 결과 반환
 * 자바스크립트의 Map 객체를 어떻게 사용하는지 제대로 학습하고 다시 풀어보자!
 */