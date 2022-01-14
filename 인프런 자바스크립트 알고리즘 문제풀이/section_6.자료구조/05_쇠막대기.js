/**
 * @desc date : Fri 01/14/22
 * @desc problem : 쇠막대기
 * @desc round : 1st
 */

/**
 * @param {string} str 길이가 최대 100,000인 쇠막대기와 레이저의 배치를 나타내는 괄호 표현
 * @returns {number} 잘려진 쇠막대기의 총 개수
 */
function solution(str) {
	let	ans = 0;
	let	stick = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' && str[i + 1] == ')') {
			ans += stick;
			i += 1;
		}
		else if (str[i] === '(')
			stick += 1;
		else if ((str[i]) === ')') {
			stick -= 1;
			ans += 1;
		}
	}
	return (ans);
}

/**
 * @desc : 스택을 사용한 풀이
 * 여는 괄호를 만나면 스텍에 push
 * 닫는 괄호를 만나면 막대의 끝점인지 레이저인지 str의 (i-1)번째 원소를 확인
 */