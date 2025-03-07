const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n));
  let min = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i + 1]){
      min = arr[i];
    }
  }
  let new_arr = arr.splice(arr.indexOf(min), 1);
  return Number((arr.toString()).replaceAll(',',''));
}

module.exports = {
  deleteDigit
};
