/* 1월 3일 (월) - 가운데 문자열 출력 - 1회차 */

function solution(str) {
	let	idx;
	let	ans = "";
	
	if (str.length === 1)
		return (str);
	idx = parseInt(str.length / 2);
	if (str.length % 2 === 1)
		ans += str[idx]; /* ans = s.substring(mid, mid+1); */
	else {
		ans += str[idx - 1]; /* ans = s.substring(mid-1, mid+1) */
		ans += str[idx]; /* ans = s.substr(mid-1, 2) */
	}
	return (ans);
}

/*
parseInt 대신 Math.floor()를 사용할 수 있다
*/