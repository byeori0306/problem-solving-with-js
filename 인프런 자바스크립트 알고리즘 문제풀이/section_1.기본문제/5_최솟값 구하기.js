function solution(arr) {
	let min = a;

	for (let i = 1; i < arr.length; i++) {
		if (min > arr[i])
			min = arr[i]
	}
	console.log(min);
}

/* tip
min = Number.MAX_SAFE_INTEGER;
*/