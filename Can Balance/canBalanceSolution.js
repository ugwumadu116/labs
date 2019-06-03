//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

function canBalance(array) {
  //Type your solutions here
  let firstArr = 0;
  let secondArr = 0;
  let theArr = [];

  for (let i = 0; i < array.length; i++) {
    firstArr = firstArr + array[i];
    theArr = [...theArr, array[i]];
    secondArr = array.slice(i + 1, array.length);
    let checkEmpty = secondArr.length;
    if (checkEmpty != 0) {
      if (firstArr == secondArr.reduce((acc, step) => acc + step)) {
        return [theArr.length, secondArr.length];
      }
    }
  }
  return -1;
}
canBalance([1, 1, 1, 2, 1]);
module.exports = canBalance;
