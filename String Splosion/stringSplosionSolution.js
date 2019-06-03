function stringSplosion(str) {
  //Provice your solution
  let ans = "";
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    ans += str.substr(0, i + 1);
  }
  return ans;
}
stringSplosion("Code");
module.exports = stringSplosion;
