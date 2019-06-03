function wordCount(arrayOfStrings) {
  let map = {};

  arrayOfStrings.forEach(item => {
    map[item] = arrayOfStrings.filter(val => val === item).length;
  });
  return map;
}
wordCount(["a", "b", "a", "c", "b"]);

module.exports = wordCount;
