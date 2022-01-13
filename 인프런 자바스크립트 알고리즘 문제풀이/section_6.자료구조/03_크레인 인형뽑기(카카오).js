/**
 * @desc date : Thu 01/12/22
 * @desc problem : 크레인 인형뽑기(카카오)
 * @desc round : 1st
 */

/**
 * @param {Array} board 크기가 5*5이상 30*30 이하이고 각 칸에 0이상 100이하인 정수가 담겨있는 2차원 배열
 * @param {Array} moves 크기가 1이상 1000이하이며 각 원소 값이 1이상 board 배열의 가로 크기 이하인 자연수인 배열
 * @returns {number} 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수
 */
function solution(board, moves) {
	let	bucket = [];
	let	ans = 0;

	console.log(board);
	for (let x of moves) {
		for (i = 0; i < board.length; i++) {
			let	y = board[i][x - 1];
			if (y !== 0) {
				let	len = bucket.length;
				if (len === 0)
					bucket.push(y)
				else if (y === bucket[len - 1]) {
					bucket.pop()
					ans += 2;
				}
				else
					bucket.push(y);
				board[i][x - 1] = 0;
				break;
			}
		}
	}
	return (ans);
}

/**
 * @desc : 풀이
 * 문제에서 바구니에 남아있는 인형이 개수가 아닌 터트려서 사라진 인형의 개수를 요구했다는 점에 유의하자!
 */