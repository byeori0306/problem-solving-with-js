/**
 * @desc date : Thu 01/06/22
 * @desc problem : 유효한 펠린드롬
 * @desc round : 1st
 */

/**
 * @param {string} str 길이 100을 넘지 않는 공백 없는 문자열
 * @returns {string} 펠린드롬이면 "YES" 아니면 "NO"
 */
function solution(str) {
	let	new_str = "";
	let	rev_str;

	str = str.toLowerCase();
	for (let x of str) {
		if (x >= 'a' && x <= 'z')
			new_str += x;
	}
	rev_str = new_str.split("").reverse().join("");
	if (new_str === rev_str)
		return "YES";
	return "NO";
}

/**
 * @desc : 풀이
 * 정규식 사용 
 * str = str.toLowerCase().replace(/[^a-z]/g, '');
 */