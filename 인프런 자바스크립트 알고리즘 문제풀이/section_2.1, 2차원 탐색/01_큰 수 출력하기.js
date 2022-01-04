/* 1월 4일 (화) - 큰 수 출력하기 - 1회차 */

function solution(n, arr) {
	let	ans = [];

	ans.push(arr[0]);
	for (let i = 1; i < n; i++) {
		if (arr[i] > arr[i - 1])
			ans.push(arr[i]);
	}
	return (ans);
}