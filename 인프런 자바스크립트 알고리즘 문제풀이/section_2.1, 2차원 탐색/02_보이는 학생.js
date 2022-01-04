/* 1월 4일 (화) - 보이는 학생 - 1회차 */

function solution(n, arr) {
	let	student = 1;
	let	max = arr[0];

	for (let i = 1; i < n; i++) {
		if (arr[i] > max) {
			max = arr[i];
			student += 1;
		}
	}
	return (student);
}