/**
 * @desc date : Thu 01/06/22
 * @desc problem : 가장 짧은 문자거리
 * @desc round : 1st
 */

/**
 * @param {string} s 길이가 100이하인 소문자로 이루어진 문자열
 * @param {string} t 소문자 중 하나
 * @returns {Array} 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 담은 배열
 */
function solution(s, t) {
	let	dis = 0;
	let	arr = [];
	let	rev_arr = [];
	let	ans = [];

	for (let x of s) {
		if (x === t)
			dis = 0;
		else
			dis += 1;
		arr.push(dis);
	}
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === t)
			dis = 0;
		else
			dis += 1;
		rev_arr.push(dis);
	}
	rev_arr.reverse();
	for (let i = 0; i < s.length; i++) {
		if (arr[i] < rev_arr[i])
			ans.push(arr[i]);
		else
			ans.push(rev_arr[i]);
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 세번째 for문 쓸 필요없이 그냥 두번째 for문에서 Math.min()으로 더 작은 값 구하기
 */