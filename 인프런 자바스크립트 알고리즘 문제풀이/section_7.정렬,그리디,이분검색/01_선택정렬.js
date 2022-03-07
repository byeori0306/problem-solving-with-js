/**
 * @desc date : Mon 03/07/22
 * @desc problem : 선택정렬
 * @desc round : 1st
 */

/**
 * @param {number} n 자연수 N(1<=N<=100)
 * @param {Array} arr N개의 자연수
 * @returns {Array} 오름차순으로 정렬하여 출력
 */

function solution(n, arr) {
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) { 
			if (arr[i] > arr[j]) {
				const temp = arr[j]
				arr[j] = arr[j]
				arr[j] = temp
			}
		}
	}
	return (arr)
}

/**
 * @desc : 풀이
 * 제일 작은 값을 선택해서 바꿈
 * 최신 JS는 파이썬처럼 값을 교환하는 것이 가능!
 */