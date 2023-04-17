const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.separator){
    options.separator = '+';
  } 

  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  } else {
    options.addition = '';
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let repeatingString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  let resultString = (str + repeatingString + options.separator).repeat(options.repeatTimes - 1) + str + repeatingString
  return resultString

}

module.exports = {
  repeater
};
