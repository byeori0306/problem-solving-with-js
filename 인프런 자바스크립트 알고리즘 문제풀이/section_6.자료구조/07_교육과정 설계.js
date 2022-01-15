/**
 * @desc date : Sat 01/15/22
 * @desc problem : 교육과정 설계
 * @desc round : 1st
 */

/**
 * @param {string} order 필수과목의 순서
 * @param {string} plan 현수가 짠 수업설계
 * @returns {string} 수업 설계가 잘된 것이면 "YES", 잘못된 것이면 "NO"
 */

function solution(order, plan) {
	let	arr_p = plan.split('');
	let	cnt = 0;

	for (let x of order) {
		while (arr_p.length > 0) {
			let	y = arr_p.shift();
			if (x === y) {
				cnt += 1;
				break;
			}
		}
	}
	if (cnt === order.length)
		return ("YES");
	else
		return ("NO");
}

/**
 * @desc : 풀이
 * let queue = need.split('');
 * for (let x of plan) {
 * 	if (queue.include(x)) {
 * 		if (x != queue.shift())
 * 			return ("NO");
 * 	}
 * }
 */