/**
 * @desc date : Thu 01/12/22
 * @desc problem : 괄호문자제거
 * @desc round : 1st
 */

/**
 * @param {string} str 길이가 100을 넘지 않는 문자열
 * @returns {string} 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자로 만든 문자열
 */
function solution(str) {
	let	stack = [];

	for (let x of str) {
		if (x !== ')')
			stack.push(x);
		else if (x === ')') {
			let	y = stack.pop()
			while (y !== '(') {
				y = stack.pop();
			}
		}
	}
	return (stack.join(''));
}

/**
 * @desc : 풀이
 * while(stack.pop() !== '('); -> 이렇게 한 줄로 써줘도 된다.
 */