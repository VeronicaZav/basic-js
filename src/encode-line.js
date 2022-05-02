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
  let arr=[]
  let count = 1
  for(let i=0; i<str.length; i++){
    if(str.charAt(i)===str.charAt(i+1)){
      count++
    }
    else if(count>1){
      arr.push(count)
      arr.push(str.charAt(i))
      count = 1;
    }
    else{
      arr.push(str.charAt(i))
    }
  }
  return arr.join('')
}

module.exports = {
  encodeLine
};
