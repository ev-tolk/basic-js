const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let new_str = '';
  num = 0;
  for (let i = 0; i < str.length; i++){
    num = num + 1;
    if(str[i] != str[i+1]){
      if(num == 1){
        new_str = new_str + str[i];
      } else{
        new_str = new_str + num + str[i];
      }

      num = 0;
    } 
  }
  return new_str;
}

module.exports = {
  encodeLine
};
