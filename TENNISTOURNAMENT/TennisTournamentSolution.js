function solution(P, C) {
  //Provide Your solution here
  if (C === 0 || P === 0) {
    return 0;
  }
  if (P === 2 && C === 0) {
    return 0;
  }
  let ans = [];
  for (let i = 2; i <= P; i += 2) {
    P - i;
    if (ans.length >= C) {
      return ans.length;
    }
    ans.push(1);
  }
  return ans.length;
}
solution(5, 3);

module.exports = solution;
