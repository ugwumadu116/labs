function wordLength(arr) {
  let map = new Map();
  arr.forEach(item => {
    map.set(item.toLowerCase(), item.length);
  });
  return map;
}
wordLength(["a", "bb", "a", "bb"]);
module.exports = wordLength;
