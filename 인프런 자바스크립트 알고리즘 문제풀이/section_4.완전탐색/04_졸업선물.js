/**
 * @desc date : Sat 01/08/22
 * @desc problem : 졸업선물
 * @desc round : 1st
 */

/**
 * @param {number} n 반 학생 수(1<=n<=1000)
 * @param {number} m 예산(1<=m<100,000,000)
 * @param {Array} arr 각 학생들이 받고 싶은 상품의 가격과 배송비를 담은 2차원 배열
 * @returns {number} 선생님이 현재 예산으로 선물할 수 있는 최대 학생 수
 */
function solution(n, m, arr) {
	let	res = [];

	for (let i = 0; i < 5; i++) {
		let	tmp = parseInt(i[0] / 2);
		let	sum = 0;
		let	cnt = 0;
		for (let j = 0; j < 5; j++) {
			if (i === j) {
				sum += (tmp + arr[i][1]);
			} else {
				sum += (arr[i][0] + arr[j][1]);
			}
			cnt += 1;
			if (sum > m)
				break;
		}
		res.push(cnt - 1);
	}
	return (Math.max.apply(null, res));
}

/**
 * @desc : 풀이
 * arr.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
 * 내 풀이가 맞는지 다른 테스트 케이스로 확인 필요
 */