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
  let result = [];
  let sum = 1 ;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if(sum == 1) sum = '';
      result.push(sum, str[i]);
      sum = 1;
    } else {
      sum ++
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};

