/**
 * @desc date : Sat 01/08/22
 * @desc problem : 멘토링
 * @desc round : 1st
 */

/**
 * @param {number} n 반 학생 수(1<=n<=20)
 * @param {number} m 수학 테스트 횟수(1<=m<10)
 * @param {Array} arr 테스트 당 결과를 담은 2차원 배열
 * @returns {number} 멘토와 멘티가 되는 짝을 만들 수 있는 경우의 수
 */
function solution(n, m, arr) {
	let	cnt = 0;

	for (i = 1; i <= n; i++) {
		let	front = Array.from({length: n}, () => 0);
		for (x = 0; x < m; x++) {
			for (y = 0; y < n; y++) {
				if (arr[x][y] == i)
					break;
				else
					front[y] += 1;
			}
		}
		for (let x of front)
			if (x === m)
				cnt += 1;
	}
	return (cnt);
}

/**
 * @desc : 풀이
 * 4중 for문 사용 - 강의 참고
 * 내 풀이가 맞는지 다른 테스트 케이스로 확인 필요
 */