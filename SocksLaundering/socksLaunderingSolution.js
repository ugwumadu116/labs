function socksLaundering(
  number_machine_can_wash,
  clean_socks,
  number_of_clean_socks,
  dirty_socks,
  number_of_dirty_socks
) {
  let pair = 0;
  let machineStrength = number_machine_can_wash;
  let cleanRemains = [];
  let singCleanRemains = [];
  /// get colors;
  let colors = clean_socks.filter((items, i, arr) => arr.indexOf(items) === i);
  if (machineStrength === 0) {
    colors.forEach(color => {
      let colorLen = clean_socks.filter(item => item === color).length;
      if (colorLen % 2 === 0) {
        pair += colorLen / 2;
      } else if (colorLen > 1) {
        pair += (colorLen - 1) / 2;
        cleanRemains.push(color);
      } else {
        singCleanRemains.push(color);
      }
    });
    return pair;
  }
  // check for pair in clean socks
  colors.forEach(color => {
    let colorLen = clean_socks.filter(item => item === color).length;
    if (colorLen % 2 === 0) {
      pair += colorLen / 2;
    } else if (colorLen > 1) {
      pair += (colorLen - 1) / 2;
      cleanRemains.push(color);
    } else {
      singCleanRemains.push(color);
    }
  });
  let cleansRR = [...cleanRemains, ...singCleanRemains];
  cleansRR.forEach(item => {
    let dirtyIndexVal = dirty_socks.indexOf(item);
    if (dirtyIndexVal !== -1) {
      dirty_socks.splice(dirtyIndexVal, 1);
      pair++;
      machineStrength--;
    }
  });

  let me = 0;

  let distinctDirtySocks = dirty_socks.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  distinctDirtySocks.forEach(dirtySocks => {
    if (dirty_socks.filter(item => item === dirtySocks).length >= 2) {
      me += dirty_socks.filter(item => item === dirtySocks).length;
    }
  });
  while (machineStrength > 0 && me > 1) {
    if (machineStrength !== 1) {
      pair++;
      me -= 2;
    }

    machineStrength -= 2;
  }

  return pair;
}

//socksLaundering(2, [1, 2, 3, 1, 2, 3], 6, [3, 3, 4, 1, 2, 7, 9], 7);
socksLaundering(2, [1, 2, 3, 1, 2, 3], 6, [3, 3, 4, 1, 2, 7, 9], 7);
// to be 4
module.exports = socksLaundering;
