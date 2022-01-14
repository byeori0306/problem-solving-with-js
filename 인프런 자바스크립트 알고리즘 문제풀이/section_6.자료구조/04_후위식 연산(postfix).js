/**
 * @desc date : Fri 01/14/22
 * @desc problem : 후위식 연산(postfix)
 * @desc round : 1st
 */

/**
 * @param {string} str 후위연산식
 * @returns {number} 연산결과
 */
function solution(str) {
	let	stack = [];

	for (let x of str) {
		if (x === '+')
			stack.push(stack.pop() + stack.pop());
		else if (x === '-') {
			let	y1 = stack.pop();
			let	y2 = stack.pop();
			stack.push(y2 - y1);
		}
		else if (x === '*')
			stack.push(stack.pop() * stack.pop());
		else if (x === '/') {
			let	y1 = stack.pop();
			let	y2 = stack.pop();
			stack.push(y2 / y1);
		}
		else
			stack.push(parseInt(x));
		console.log(stack);
	}
	return (stack[0]);
}

/**
 * @desc : 풀이
 * isNaN()로 숫자인지 연산자인지를 판별
 * 스택에서 꺼내는 두 수의 변수명을 lt와 rt로 지으면 직관적이고 깔끔
 */