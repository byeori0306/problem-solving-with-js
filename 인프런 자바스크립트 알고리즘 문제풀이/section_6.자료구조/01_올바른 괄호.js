/**
 * @desc date : Mon 01/24/22
 * @desc problem : 올바른 괄호
 * @desc round : 2nd
 */

/**
 * @param {string} str 길이가 최대 30인 괄호 문자열
 * @returns {string} 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"
 */
function solution(str) {
	let	stack = [];

	for (let x of str) {
		if (x === '(')
			stack.push(x);
		else if (x === ')') {
			p = stack.pop();
			if (p !== '(') // 이 조건 대신 pop 위에 if (stack.length === 0) return "NO";
				return 'NO';
		}
	}
	if (stack.length === 0)
		return 'YES';
	else
		return 'NO';
}

/**
 * @desc : 풀이
 * '))))' -> 이 케이스에서 1회차 때 fail 
 */