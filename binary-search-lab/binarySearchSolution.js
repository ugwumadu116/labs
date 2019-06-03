//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  let first = 0;
  let last = array.length - 1;
  let index = array.indexOf(number);
  let found = false;

  let count = 0;

  while (found === false && first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (array[middle] == number) {
      found = true;
    } else if (array[middle] > number) {
      last = middle - 1;
      count++;
    } else {
      first = middle + 1;
      count++;
    }
  }
  return { index, count };
}

binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 15);

module.exports = binarySearch;
