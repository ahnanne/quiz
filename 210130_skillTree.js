// 스킬트리
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  const _skill = [...skill];
  let answer = 0;

  skill_trees.forEach(skillTree => {
    const _skillTree = [...skillTree];
    let score = 0;

    _skill.reduce((prevSkill, currSkill) => {
      const priority = _skillTree.indexOf(currSkill);
      if ((priority !== -1) && (prevSkill > priority)) --score;
      else if ((prevSkill === -1) && (priority !== -1)) --score;

      return priority;
    }, -2);

    if (!score) answer++;
  });

  return answer;
}

const testSkill = 'CBD';
const skillTrees = ['BACDE', 'CBADF', 'AECB', 'BDA'];

console.log(solution(testSkill, skillTrees));

const skillTrees2 = ['BACDE', 'CBADF', 'AECB', 'BDA', 'CD'];
console.log(solution(testSkill, skillTrees2));
