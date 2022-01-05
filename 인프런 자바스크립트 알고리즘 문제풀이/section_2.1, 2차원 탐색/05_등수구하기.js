/* 1월 5일 (수) - 등수구하기 - 1회차 */

function solution(n, arr) {
	let	rank = 1;
	let	res = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] < arr[j])
				rank += 1;
		}
		for (let j = i + 1; j < n; j++) {
			if (arr[i] < arr[j])
				rank += 1;
		}
		res.push(rank);
		rank = 1;
	}
	return (res);
}

/* 풀이
res = [1, 1, 1, 1, 1]처럼 초기화
let answer = Array.from({length:n}, ()=>1);

나랑 나를 비교해도 영향이 없으므로 안에 0~n-1을 도는 for 문으로 1번만 써도 된다.
*/