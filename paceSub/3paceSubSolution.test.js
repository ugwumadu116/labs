const paceSub = require("../paceSubSolution");

test('a case of near value where T is near S.length, paceSub(`02/.4kd5t1]ga9|}{-+3><=`,`3+2=5`, 22 ) to expect "+-0<d"', () => {
  expect(paceSub(`02/.4kd5t1]ga9|}{-+3><=`,`3+2=5`, 22 )).toBe("+-0<d");
});

test(`a simple case of medium values where S.length and W.length are large than T, paceSub("plmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n\t"<dovtqatevmxitecistfcg>", 19 ) to expect "f$a/@_(@&/s-q@&=q^@!=]t"`, async() => {
  let result = "f$a/@_(@&/s-q@&=q^@!=]t"
  expect(paceSub(`plmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
    `<dovtqatevmxitecistfcg>`,
    19 )).toBe(result);
});

test(`a case of medium values where W.length and T are equal, paceSub("QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n\t"PQCFBGTO<dovtqatevmxitecKMDFYNGIistfcg>",39 ) to expect "$dsq,./;fD_}STGSF}&?+SF>@#eq'[.-+RSQ><t"`, async() => {
  let result = "$dsq,./;fD_}STGSF}&?+SF>@#eq'[.-+RSQ><t"
  expect(paceSub(`QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
  `PQCFBGTO<dovtqatevmxitecKMDFYNGIistfcg>`,
  39)).toBe(result);
});

test(`a case of large T value, paceSub("QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n\t"PQCFBGTO<dovtqatevmxitecKMDFYNGIistfcg>", 1000000 ) to expect "aojuygcfm_;-*:{*|-.^[*|%ewbuxtgz[)*&%$n"`, async() => {
  //await new Promise(resolve => setTimeout(resolve, 10));
  let result = "aojuygcfm_;-*:{*|-.^[*|%ewbuxtgz[)*&%$n"
  expect(paceSub(`QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
  `PQCFBGTO<dovtqatevmxitecKMDFYNGIistfcg>`,
  100000000)).toBe(result);
});

test(`a case of large T value, paceSub("QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n"QSCDERFBGTYONJUILKMPpQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?lmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?PQCFBGTO<dovtqateQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?vmxitecKMDFYNGIistfcg>QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n 1000003 ) to expect "bvhuygcxftrdzsewaq,./bvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij.bhcxftdo|=#+><+:bvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij#;(-+:*q,ucrzfw-{+_*&ibvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij"`, async() => {
  let result = `bvhuygcxftrdzsewaq,./bvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij.bhcxftdo|=#+><+:bvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij#;(-+:*q,ucrzfw-{+_*&ibvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkoij`
  expect(paceSub(`QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
  `QSCDERFBGTYONJUILKMPpQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?lmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?PQCFBGTO<dovtqateQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?vmxitecKMDFYNGIistfcg>QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
   1000003 )
  ).toBe(result);
});
test(`a case of large T value, paceSub("QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n"QSCDERFBGTYONJUILKMPpQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?lmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?PQCFBGTO<dovtqateQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?vmxitecKMDFYNGIistfcg>QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?",\n 10000000 ) to expect "oijbvhuygcxftrdzsewaqoijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkaojuygcfm_;-*:{*|oijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk-.^[*|%ewbuxtgz[)*&%$noijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk"`, async() => {
  let result = `oijbvhuygcxftrdzsewaqoijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnkaojuygcfm_;-*:{*|oijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk-.^[*|%ewbuxtgz[)*&%$noijbvhuygcxftrdzsewaq,./';[]=-!@#$%^&*(_+)|}{:"<>?QSCDERFBGTYONJUILKMPplmnk`
  await expect(paceSub(`QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
  `QSCDERFBGTYONJUILKMPpQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?lmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?PQCFBGTO<dovtqateQSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?vmxitecKMDFYNGIistfcg>QSCDERFBGTYONJUILKMPplmnkoijbvhuygcxftrdzsewaq,./';[\]=-!@#$%^&*(_+)|}{:"<>?`,
   10000000 )).toBe(result);
});
