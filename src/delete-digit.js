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
  let num = String(n);
  let arr = num.split('');
  let index = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i+1]){
      index = i+1;
    }
  }
  let new_arr = arr.splice(index, 1);
  return Number(new_arr.toString());
}

module.exports = {
  deleteDigit
};
