/* 1월 3일 (월) - 중복단어제거 - 1회차 */

function solution(n, arr) {
	let	flag = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j])
				flag = 1;
		}
		if (flag === 0)
			console.log(arr[i]);
		flag = 0;
	}
}

/* 풀이
let ans;
ans = s.filter(function(v, i){
	return (s.indexOf(v) === i);
});
*/