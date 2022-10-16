const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.length;
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this._checkIntegerNumber(position)){
      if(position < 1 || position > this.getLength()){
        this.currChain.length = 0;
        throw new Error ("You can't remove incorrect link!");
      }
      let index = position -1;
      this.currChain.splice(index, 1);
      return this;
    }
    this.currChain.length = 0;
    throw new Error ("You can't remove incorrect link!");
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.currChain.join('~~');
    this.currChain.length = 0;
    return chain;
  },
  _checkIntegerNumber(num){
    return typeof num === 'number' && (num^0) === num;
  }
};

module.exports = {
  chainMaker
};
