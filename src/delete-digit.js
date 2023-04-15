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
  let arr = String(n).split('');
  let max = Math.max.apply(null, arr);
  let index = arr.indexOf(String(max))
if (index > 0) {
  arr.splice(index-1,1)
} else if (index == 0) {
  arr.splice(index+1,1)
}
return +arr.join('') 
}

module.exports = {
  deleteDigit
};

