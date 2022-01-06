/**
 * @desc date : Thu 01/06/22
 * @desc problem : 문자열 압축
 * @desc round : 1st
 */

/**
 * @param {string} s 길이가 100이하인 대문자로 이루어진 문자열
 * @returns {string} 주어진 문자열에서 같은 문자가 연속으로 반복되는 경우 문자 오른쪽에 반복 횟수를 표기하는 방법으로 압축한 문자열
 */
function solution(s) {
	let	cnt = 1;
	let	c = s[0];
	let	ans = [s[0]];

	for (let i = 1; i < s.length; i++) {
		if (s[i] === c)
			cnt += 1;
		else {
			if (cnt > 1)
				ans.push(cnt);
			cnt = 1;
			c = s[i];
			ans.push(s[i]);
		}
	}
	if (cnt > 1)
		ans.push(cnt);
	ans = ans.join("");
	return (ans);
}

/**
 * @desc : 풀이
 * s 뒤에 빈 문자를 하나 넣어서 마지막 문자도 비교가능하게 함 s = s + " ";
 * s[i] = s[i+1]
 */