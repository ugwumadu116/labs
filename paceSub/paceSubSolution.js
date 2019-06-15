function paceSub(S, W, T) {
  // code goes here ...
  let ans = '';
  const myArr = W.split('');
  let remainder = 0;
  myArr.forEach(item => {
    remainder += S.length - (S.indexOf(item) + 1);
    if (remainder >= T) {
      ans += S.charAt(S.indexOf(item) + T);
    } else {
      let k = (S.indexOf(item) + T) % S.length;
      ans += S[k];
    }
  })
  return ans;

}
// let result = "aojuygcfm_;-*:{*|-.^[*|%ewbuxtgz[)*&%$n"
paceSub(`QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
  `PQCFBGTO<dovtqatevmxitecKMDFYNGIistfcg>`,
  100000000) // 100000000

module.exports = paceSub;
