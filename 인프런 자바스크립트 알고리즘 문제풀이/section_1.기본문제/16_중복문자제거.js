/* 1월 3일 (월) - 중복문자제거 - 1회차 */

function solution(str) {
	let	flag = 0;
	let	ans = "";

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j])
				flag = 1;
		}
		if (flag === 0)
			ans += str[i];
		flag = 0;
	}
	return (ans);
}

/* 풀이
for (let i=0; i<s.length; i++) {
	if (s.indexOf(s[i]) === i)
		answer += s[i]
}
*/

/* indexOf()를 이용하여 특정 문자의 개수 세기
let pos = s.indexOf('k');
while (pos !== -1) {
	cnt++;
	pos = s.indexOf('k', pos + 1);
}
*/