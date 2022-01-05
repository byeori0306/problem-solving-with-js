/**
 * @desc date : Wed 01/05/22
 * @desc problem : 회문 문자열
 * @desc round : 1st
 */

/**
 * @param {string} str 
 * @returns {string} 회문 문자열이면 "YES" 아니면 "NO"
 */
function solution(str) {
	let len = str.length;
	str = str.toLowerCase();

	for (let i = 0; i < Math.floor(len / 2); i++) {
		if (str[i] !== str[len - i - 1]) {
			return ("NO");
		}
	}
	return ("YES");
}

/**
 * @desc : 풀이
 * 메서드 사용 
 * if (str.split('').reverse().join('') !== str) return "NO";
 */