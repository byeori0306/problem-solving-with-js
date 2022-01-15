/**
 * @desc date : Sat 01/15/22
 * @desc problem : 공주 구하기
 * @desc round : 1st
 */

/**
 * @param {number} n 왕자의 수로 자연수 N(5<=N<=1,000)
 * @param {number} k 자연수 K(2<=K<=9)
 * @returns {number} 공주를 구하러 갈 왕자의 번호
 */

 function solution(n, k) {
	let	princes = [];
	let	cnt = 0;

	for (let i = 1; i <= n; i++)
		princes.push(i);
	while (princes.length > 1) {
		let	prince = princes.shift();
		cnt += 1;
		if (cnt === k)
			cnt = 0;
		else
			princes.push(prince);
	}
	return (princes[0])
}

/**
 * @desc : 풀이
 * let princes = Array.from({length: n}, (v, i)=>i+1);
 * while 문 안에서 for문을 사용 -> for(let i = 1; i < k; i++) princes.push(princes.shift());
 */