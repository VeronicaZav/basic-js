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
  n = n.toString()
  return Math.max(...n.split('').map((_,el) => n.slice(0, el) + n.slice(el + 1)));
}

module.exports = {
  deleteDigit
};
