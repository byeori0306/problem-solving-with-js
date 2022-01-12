/**
 * @desc date : Wed 01/12/22
 * @desc problem : 올바른 괄호
 * @desc round : 1st -> fail
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
		else if (x === ')')
			stack.pop();
	}
	if (stack.length === 0)
		return 'YES';
	else
		return 'NO';
}

/**
 * @desc : 풀이
 * '))))' -> 이 케이스에서 fail
 */