// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0; // 터트려서 사라진 인형의 개수
  let cnt = 0; // stack에 쌓여있는 인형의 개수

  // 인형 쌓는 스택
  const stack = [];

  for (let index = 0; index < moves.length; index++) {
    for (let i = 0; i < board.length; i++) {
      // console.log(`좌표값은 (${[moves[index]]}, ${board[i][moves[index] - 1]})`);
      if (board[i][moves[index] - 1] !== 0) {
        stack.push(board[i][moves[index] - 1]);
        cnt++;
        board[i].splice(moves[index] - 1, 1, 0);
        if (stack[cnt - 1] === stack[cnt - 2]) {
          // console.log('내부 if문 실행!');
          stack.pop();
          stack.pop();
          cnt -= 2;
          answer += 2;
        }
        break;
      }
    }
  }

  return answer;
}

const testBoard = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const testMoves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(testBoard, testMoves)); // 4
