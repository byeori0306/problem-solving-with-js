/* 1월 2일 (일) - A를 #으로 - 1회차 : fail */

function solution(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'A')
			str[i] = '#';
	}
	return (str);
}

/*
문자열은 배열처럼 주소를 참조하지 않는다.
*/