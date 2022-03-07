/**
 * @desc date : Mon 03/07/22
 * @desc problem : 버블정렬
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수 N(1<=N<=100)
 * @param {Array} arr N개의 자연수
 * @returns {Array} 오름차순으로 정렬하여 출력
 */

function solution(n, arr) {
	for (let i = 0; i < n - 1; i++) {
		for (let j = i; j < n; j++) { 
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return (arr)
}

/**
 * @desc : 풀이
 * j = 0 ~ arr.length - i - 2
 */