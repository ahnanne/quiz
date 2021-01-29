// 두 개 뽑아서 더하기
function solution(numbers) {
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) continue;
      const elem = numbers[i] + numbers[j];
      res.push(elem);
    }
  }
  // remove duplicated number(s)
  const _res = res.slice();

  for (let i = 0; i < res.length; i++) {
    const index = res.indexOf(res[i]);
    if (i !== index) {
      const x = _res.indexOf(res[i]);
      _res.splice(_res.indexOf(res[i], x + 1), 1);
    }
  }
  const answer = _res.sort((a, b) => a - b);
  return answer;
}

console.log(solution([5, 0, 2, 7])); // [ 2, 5, 7, 9, 12 ]
