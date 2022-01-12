/**
 * @desc date : Wed 01/12/22
 * @desc problem : 모든 아나그램
 * @desc round : 1st
 */

/**
 * @param {Map} a
 * @param {Map} b
 * @returns {boolean} 두 map 객체가 같으면 true, 다르면 false 반환
 */
function is_equal_hash(a, b) {
	for (let [key, val] of a) {
		if (!b.has(key) || b.get(key) !== val)
			return (false);
	}
	return (true);
}

/**
 * @param {string} s 길이가 10,000이하인 단어
 * @param {string} t 길이가 a와 같거나 작은 단어
 * @returns {number} s단어에 t문자열과 아나그램이 되는 부분문자열의 개수
 */
function solution(s, t) {
	let	lt = s[0];
	let	rt = s[1];
	let	hash_1 = new Map();
	let	ans = 0;

	for (let x of t) {
		if (hash_1.has(x))
			hash_1.set(x, hash_1.get(x) + 1);
		else
			hash_1.set(x, 1);
	}
	for (let i = 0; i < s.length; i++) {
		let	hash_2 = new Map();
		for (let j = i; j < i + t.length; j++) {
			if (hash_2.has(s[j]))
				hash_2.set(s[j], hash_1.get(s[j]) + 1);
			else
				hash_2.set(s[j], 1);
		}
		if (is_equal_hash(hash_1, hash_2))
			ans += 1;
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 해쉬, 슬라이딩 윈도우, 투포인터를 모두 사용하는 종합문제
 * 이중 for문 사용시 O(nm)시간, 슬라이딩 윈도우 기법 사용 시 O(n)시간
 */