/* 1월 4일 (화) - 가위바위보 - 1회차 */

function solution(n, a, b) {
	for (let i = 0; i < n; i++) {
		if (a[i] == b[i])
			console.log("D");
		else if (a[i] === 1) {
			if (b[i] === 2)
				console.log("B");
			else
				console.log("A");
		} else if (a[i] === 2) {
			if (b[i] === 1)
				console.log("A");
			else
				console.log("B")
		} else if (a[i] === 3) {
			if (b[i] === 1)
				console.log("B");
			else
				console.log("A");
		}
	}
}

/* 풀이 -> 기준을 잘 잡자
if (a[i] == b[i])
	console.log("D");
else if (a[i] === 1 && b[i] === 3)
	console.log("A");
else if (a[i] === 2 && b[i] === 1)
	console.log("A");
else if (a[i] === 3 && b[i] === 2)
	console.log("A");
else
	console.log("B");
*/