/**
 * @desc date : Thu 01/06/22
 * @desc problem : 숫자만 추출
 * @desc round : 1st
 */

/**
 * @param {string} str 문자와 숫자가 섞여있는 문자열
 * @returns {number} 주어진 문자열에서 숫자만 추출하여 만든 자연수
 */
function solution(str) {
	let	num = "";
	let ans;

	for (let x of str) {
		if (x >= '0' && x <= '9')
			num += x;
	}
	ans = parseInt(num);
	return (ans);
}

/**
 * @desc : 풀이
 * isNaN() 사용 + ParseInt()를 못 쓴다면
 * if (!isNaN(x))
 * 	ans = ans * 10 + Number(x);
 */