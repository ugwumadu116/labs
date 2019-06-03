//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array

function binarySearchOccurance(array, number) {
  let low = 0;
  let high = array.length - 1;
  let occurance = -1;
  let count = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    count++;
    if (array[low] === number) {
      occurance = 1;
      let nextIndex = low + 1;
      while (array[nextIndex] === number) {
        occurance++;
        count++;
        nextIndex++;
      }
      return { count, occurance };
    } else if (array[high] === number) {
      occurance = 1;
      let preIndex = high - 1;
      while (array[preIndex] === number) {
        occurance++;
        count++;
        preIndex--;
      }
      return { count, occurance };
    } else if (array[mid] === number) {
      occurance = 1;
      let rightIndex = mid + 1;
      let leftIndex = mid - 1;
      while (array[rightIndex] === number) {
        occurance++;
        count++;
        rightIndex++;
      }
      while (array[leftIndex] === number) {
        occurance++;
        count++;
        leftIndex--;
      }
      return { count, occurance };
    } else if (array[mid] > number) {
      high = mid - 1;
      low++;
    } else {
      low = mid + 1;
      high--;
    }
  }
  return { count, occurance };
}

binarySearchOccurance([0, 5, 10, 15, 20, 22, 30, 35, 40], 15);

module.exports = binarySearchOccurance;
