const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) { 
    throw new Error("Incorrect arguments!");
  }
      
    let res = '';
    let j = 0;
    message = message.toUpperCase();
    for(let i = 0; i < message.length; i++) {
      let input = message[i].charCodeAt();
      if (input >= 65 && input <= 90) {
      let code = ((input - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
      res += String.fromCharCode(code+65);
      j++;
      }  else {
        res += message[i];
      }
      
    }
    return this.direct ? res : res.split('').reverse().join('');
  }
 
  decrypt(message, key) {
    if (!message || !key) { 
      throw new Error("Incorrect arguments!");
    }
        
      let res = '';
      let j = 0;
      message = message.toUpperCase();
      for(let i = 0; i < message.length; i++) {
        let input = message[i].charCodeAt();
        if (input >= 65 && input <= 90) {
        let code = (input - key[j%key.length].toUpperCase().charCodeAt() + 26) % 26;
        res += String.fromCharCode(code+65);
        j++;
        }  else {
          res += message[i];
        }
        
      }
      return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
