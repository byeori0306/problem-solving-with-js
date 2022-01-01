function solution(arr) {
	let sum = 0;
	let min = 101;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			sum += arr[i];
			if (min > arr[i])
				min = arr[i];
		}
	}

	console.log(sum);
	console.log(min);
}